import { useReducer } from 'react'

import OPERATORS from '../definitions/Operators'


function useCalculatorState(initialRows = []) {
    const [ rows, dispatch ] = useReducer(reducer, initialRows)

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
        setOperand: (operand, value) => dispatch({ type: 'SET_OPERAND', operand, value }),
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

function reducer(state, action) {
    switch (action.type) {
        case 'SET_OPERAND': {
            const { operand, value } = action

            return state.map(row => {
                if (row.name === operand) {
                    return {
                        ...row,
                        value: value,
                    }
                }

                return row
            })
        }
        default: 
            return state;
    }
}

export default useCalculatorState