import React from 'react'
import styled from 'styled-components'

import OPERATORS from '../definitions/Operators'
import useCalculator from '../hooks/useCalculator'


function Row({ operator, ...rowProps }) {
    return (
        <Container>
            {operator === OPERATORS.EQUALS && <hr/>}
            <div className="calculator-row">
                {operator && <span className="operator">{operator}</span>}

                {
                    operator === OPERATORS.EQUALS
                        ? <Result {...rowProps} />
                        : <Operand {...rowProps} />
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
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

function getLabel(label, value) {
    return typeof label === 'function'
        ? label(value)
        : label // does not use value
}

export default Row