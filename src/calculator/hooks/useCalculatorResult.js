import { useRecoilValue, selectorFamily } from 'recoil'
import OPERATORS from '../definitions/Operators'
import { RowById, NestedRows, FlatRows, SiblingRows } from '../selectors'


function useCalculatorResult(name) {
    const previousRows = useRecoilValue(PreviousRows(name))
    const result = useRecoilValue(CalculateRow(name))

    return {
        result,
        precedingRowNames: previousRows.map(row => row.name),
    }
}

const CalculateRow = selectorFamily({
    key: 'calculateRow',
    get(id) {
        return ({ get }) => {
            // Get all previous rows, ignoring = rows.
            const previousRows = get(PreviousRows(id)).filter(row => row.operator !== OPERATORS.EQUALS)

            if (previousRows.length === 0) {
                return null
            }

            const result = previousRows.reduce((result, row) => {
                if (!row.operator) {
                    return row.value // If no operator, this is the initial value.
                }

                if (Array.isArray(row.rows)) {
                    const lastNestedRow = row.rows[row.rows.length - 1]

                    return calculate(
                        result,
                        get(CalculateRow(lastNestedRow.name)),
                        row.operator
                    )
                } else {
                    return calculate(
                        result,
                        row.value,
                        row.operator
                    )
                }
            }, null)

            return result
        }
    },
})

export const PreviousRows = selectorFamily({
    key: 'previousRows',
    get(id) {
        return ({ get }) => {
            const rows = get(SiblingRows(id))

            const rowIndex = rows.findIndex(row => row.name === id)

            return rows.filter((_, index) => index < rowIndex)
        }
    }
})

function calculate(a, b, operator) {
    const parsedA = Number(a)
    const parsedB = Number(b)

    switch (operator) {
        case OPERATORS.ADDITION:
            return parsedA + parsedB
        case OPERATORS.SUBTRACTION:
            return parsedA - parsedB
        case OPERATORS.MULTIPLICATION:
            return parsedA * parsedB
        case OPERATORS.DIVISION:
            return parsedA / parsedB
        default:
            throw new Error(`Unknown operator ${operator}`)
    }
}



export default useCalculatorResult