import React from 'react'
import styled from 'styled-components'

import OPERATORS from '../definitions/Operators'

import Result from './Result'
import Operand from './Operand'
import Operator from './Operator'

import getLabel from './getLabel'
import useCalculatorState from '../hooks/useCalculatorState'

function Row({ name, className, operator, label }) {
    const { rows, calculate, getRowsBeforeResult, setValue } = useCalculatorState()
    const row = rows.find(row => row.name === name)

    return (
        <Container className={className}>
            {operator === OPERATORS.EQUALS && <hr/>}
            <div className="calculator-row">
                {
                    operator
                        ? <Operator operator={operator} className="operator" />
                        : <span className="operator placeholder">&nbsp;</span>
                }

                <label className="label" htmlFor={name}>{getLabel(label, row.value)}</label>

                {
                    operator === OPERATORS.EQUALS
                        ? (
                            <Result 
                                name={name}
                                className="result"
                                operands={getRowsBeforeResult(name).map(row => row.name)}
                                result={calculate(name)}
                            />
                        )
                        : (
                            <Operand 
                                name={name}
                                value={row.value}
                                className="operand"
                                onChange={value => setValue(name, value)}
                            />
                        )
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
        display: grid;

        gap: 1rem;
        grid-template-columns: 2rem 1fr 1fr;
    }
`

export default Row