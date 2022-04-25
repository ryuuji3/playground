import React from 'react'
import styled from 'styled-components'

import OPERATORS from '../definitions/Operators'

import Result from './Result'
import Operand from './Operand'
import Operator from './Operator'

import getLabel from './getLabel'
import { useCalculatorRow } from '../hooks'

function Row({ name, className, operator, label, rows, initialValue, parent }) {
    const { value, setValue } = useCalculatorRow(name, {
        name,
        value: initialValue,
        operator,
        rows,
        parent,
    })

    return (
        <Container className={className}>
            {operator === OPERATORS.EQUALS && <hr/>}
            <div className="calculator-row">
                {
                    operator
                        ? <Operator operator={operator} className="operator" />
                        : <span className="operator placeholder">&nbsp;</span>
                }

                <label className="label" htmlFor={name}>{getLabel(label, value)}</label>

                {
                    Array.isArray(rows)
                        ? (
                            <div className="calculator-row">
                                {rows.map(row => (<Row key={row.name} initialValue={row.value} className="row" parent={name} {...row} />))}   
                            </div>
                        )
                        : operator === OPERATORS.EQUALS
                            ? (
                                <Result
                                    name={name}
                                    className="result"
                                />
                            )
                            : (
                                <Operand 
                                    name={name}
                                    value={value}
                                    className="operand"
                                    onChange={setValue}
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