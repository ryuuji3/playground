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
            <div className="calculator-row">
                {
                    operator
                        ? <Operator operator={operator} className="operator" />
                        // Preserve spacing
                        : <span className="operator placeholder">&nbsp;</span>
                }

                <label className="label" htmlFor={name}>{getLabel(label, value)}</label>

                {
                    Array.isArray(rows)
                        // Nested rows
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
    > .calculator-row {
        display: contents;
    }
`

export default Row