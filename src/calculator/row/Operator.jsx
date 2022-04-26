import React from 'react'
import styled from 'styled-components'
import OPERATORS from '../definitions/Operators'

function Operator({ operator, ...otherProps }) {
    return (
        <Container {...otherProps}>{getOperator(operator)}</Container>
    )
}

const Container = styled.span`
    color: black;
`

function getOperator(operator) {
    switch (operator) {
        case OPERATORS.ADDITION:
            return '+'
        case OPERATORS.SUBTRACTION:
            return '-'
        case OPERATORS.MULTIPLICATION:
            return '×'
        case OPERATORS.DIVISION:
            return '÷'
        case OPERATORS.EQUALS:
            return '='
        default:
            return operator
    }
}

export default Operator