import React from 'react'

function Operator({ operator, ...otherProps }) {
    return (
        <span {...otherProps}>{getOperator(operator)}</span>
    )
}

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