import React from 'react'
import styled from 'styled-components'
import { useCalculatorResult } from '../hooks'


function Result({ label, name, ...otherProps }) {
    const { result, precedingRowNames } = useCalculatorResult(name)

    return (
        <Output 
            name={name} 
            htmlFor={precedingRowNames.join(" ")}
            {...otherProps}
        >
            {Number.isNaN(result) ? null : result}
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