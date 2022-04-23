import React from 'react'
import styled from 'styled-components'

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
        case '+':
            return '+'
        case '-':
            return '-'
        case '*':
            return '×'
        case '/':
            return '÷'
        case '=':
            return '='
        default:
            return operator
    }
}

export default Operator