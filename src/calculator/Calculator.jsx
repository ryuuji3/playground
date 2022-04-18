import React from 'react'
import styled from 'styled-components'

import OPERATORS from './definitions/Operators'


export default function Calculator({
    rows = [],
}) {
    const operands = rows.map(row => row.operand)
    const calculatorRows = rows.map(row => (<Row {...row} key={row.operand} operands={operands} />))

    return (
        <Container>
            {calculatorRows}
        </Container>
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

function Operand({ label, operand, initialValue }) {
    return (
        <div className="operand">
            <label htmlFor={operand}>{label}</label>
            <input name={operand} type="number" inputMode="decimal" value={initialValue} />
        </div>
    )
}

function Result({ label, operand, result, operands }) {
    return (
        <div className="result">
            <label htmlFor={operand}>{label}</label>
            <output name={operand} htmlFor={operands.join(" ")}>{result}</output>
        </div>
    )
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