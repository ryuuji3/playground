import { useRecoilState } from 'recoil'
import { Rows } from '../../atoms'

import OPERATORS from '../definitions/Operators'


function useCalculatorState() {
    const [ rows, setRows ] = useRecoilState(Rows)

    function getRowsBeforeResult(resultName) {
        const resultIndex = rows.findIndex(row => row.name === resultName)

        if (resultIndex === -1) {
            throw new Error(`No result found for operand ${resultName}`)
        }

        // TODO: Should start at a = if present?
        return rows.slice(0, resultIndex)
    }

    return {
        rows,
        setValue: (name, value) => {
            setRows(stateRows => {
                return stateRows.map(row => {
                    if (row.name === name) {
                        return {
                            ...row,
                            value: value,
                        }
                    }

                    return row
                })
            })
        },
        calculate(upToOperand) {
            const [ firstRow, ...rows ] = getRowsBeforeResult(upToOperand)

            return rows.reduce((result, row) => {
                if (row.operator === OPERATORS.EQUALS) {
                    return result
                }

                return calculate(result, row.value, row.operator)
            }, firstRow.value)
        },
        getRowsBeforeResult,
    }
}

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

export default useCalculatorState