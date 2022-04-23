import React from 'react'
import styled from 'styled-components'

import { useCalculator } from '../hooks'


function Result({ label, name, ...otherProps }) {
    const { calculate, getRowsBeforeResult } = useCalculator()
    const operands = getRowsBeforeResult(name).map(row => row.name)
    const result = calculate(name)

    return (
        <Output 
            name={name} 
            htmlFor={operands.join(" ")} 
            {...otherProps}
        >
            {result}
        </Output>
    )
}

const Output = styled.output`
    display: flex;

    margin: 0;
    padding: 0;
    padding-left: 1rem;
    border: 1px solid black;

    height: 2rem;
`

export default Result