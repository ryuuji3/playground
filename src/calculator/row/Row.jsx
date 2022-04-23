import React from 'react'
import styled from 'styled-components'

import OPERATORS from '../definitions/Operators'

import Result from './Result'
import Operand from './Operand'
import Operator from './Operator'


function Row({ operator, ...rowProps }) {
    return (
        <Container>
            {operator === OPERATORS.EQUALS && <hr/>}
            <div className="calculator-row">
                <Operator operator={operator} className="operator" />

                {
                    operator === OPERATORS.EQUALS
                        ? <Result className="result" {...rowProps} />
                        : <Operand className="operand" {...rowProps} />
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

            /* Account for font-size */
            top: calc(50% - 1rem);
            left: 0;

            font-size: 1rem;
        }
    }
`

export default Row