import React, { useContext, useReducer } from 'react'
import styled from 'styled-components'

import OPERATORS from './definitions/Operators'


const CalculatorContext = React.createContext()

export default function Calculator({
    initialRows = [],
}) {
    const calculator = useCalculatorState(initialRows)
    const calculatorRows = calculator.rows.map(row => (<Row {...row} key={row.name} />))

    return (
        <CalculatorContext.Provider value={calculator}>
            <Container>
                {calculatorRows}
            </Container>
        </CalculatorContext.Provider>
    )
}

function Row({ operator, ...rowProps }) {
    return (
        <>
            {operator === OPERATORS.EQUALS && <hr/>}
            <div className="calculator-row">
                {operator && <span className="operator">{operator}</span>}

                {
                    operator === OPERATORS.EQUALS
                        ? <Result {...rowProps} />
                        : <Operand {...rowProps} />
                }
            </div>
        </>
    )
}

function Operand({ label, name, value }) {
    const { setOperand } = useCalculator()

    function handleChange(event) {
        setOperand(name, event.target.value)
    }

    return (
        <div className="operand">
            <label htmlFor={name}>{getLabel(label, value)}</label>
            <input name={name} type="number" inputMode="decimal" value={value} onChange={handleChange} />
        </div>
    )
}

function getLabel(label, value) {
    return typeof label === 'function'
        ? label(value)
        : label // does not use value
}

function Result({ label, name }) {
    const { calculate, getRowsBeforeResult } = useCalculator()
    const operands = getRowsBeforeResult(name).map(row => row.name)
    const result = calculate(name)

    return (
        <div className="result">
            <label htmlFor={name}>{getLabel(label, result)}</label>
            <output name={name} htmlFor={operands.join(" ")}>{result}</output>
        </div>
    )
}

function useCalculator() {
    return useContext(CalculatorContext)
}

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

const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    padding: 2rem 1rem;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-sizing: border-box; 

    max-width: 80%;

    > hr {
        display: block;

        width: 100%;
        height: 1px;

        border: 0;

        margin: 0.1rem 0 1rem;

        background-color: black;
    }

    > .calculator-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 1rem;

        /* For the operand */
        position: relative;

        > .operator {
            position: absolute;
            left: 0;

            font-size: 1rem;

            /* accounting for font-size */
            top: calc(50% - 1rem);

            color: black;
        }

        > .operand, > .result {
            display: flex;
            flex-basis: 100%;
            flex-wrap: wrap;
            column-gap: 1rem;

            margin-left: 2rem; /* Space for operator */
            margin-bottom: 1rem;

            > label {
                flex: 2;
                color: black;
                align-self: center;
            }

            > input, > output {
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0;
                padding-left: 1rem;

                flex: 1;
                border: 1px solid black;
                height: 2rem;
            }
        }
    }
`