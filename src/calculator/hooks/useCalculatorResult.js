import { useRecoilValue, selectorFamily } from 'recoil'
import OPERATORS from '../definitions/Operators'
import { SiblingRows } from '../selectors'


// Used to calculate from all preceding rows for a specific = row.
function useCalculatorResult(name) {
    const previousRows = useRecoilValue(PreviousRows(name))
    const result = useRecoilValue(CalculateRow(name))

    return {
        result,
        // Used for <output for={}>
        precedingRowNames: previousRows.map(row => row.name),
    }
}

const CalculateRow = selectorFamily({
    key: 'calculateRow',
    get(id) {
        return ({ get }) => {
            // Get all previous rows, ignoring = rows.
            const previousRows = get(PreviousRows(id)).filter(row => row.operator !== OPERATORS.EQUALS)

            // Nothing to calculate if there are no previous rows.
            if (previousRows.length === 0) {
                return null
            }

            return previousRows.reduce((result, row) => {
                if (!row.operator) {
                    return row.value // If no operator, this is the initial value.
                }

                // Handles nested rows
                if (Array.isArray(row.rows)) {
                    // The last row can be used to calculate the entire array of nested rows.
                    const lastNestedRow = row.rows[row.rows.length - 1]

                    return calculate(
                        result,
                        get(CalculateRow(lastNestedRow.name)), // Handles recursion (eg. deeply nested rows)
                        row.operator
                    )
                } else {
                    // Handles top-level rows
                    return calculate(
                        result,
                        row.value,
                        row.operator
                    )
                }
            }, null)
        }
    },
})

// So that we only use rows that don't come after the current row.
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

// For now a simple calculator but in future we could support more advanced functions/operations like exponents, etc.
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