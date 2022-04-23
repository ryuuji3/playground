import React from 'react'
import styled from 'styled-components'


function Result({ label, name, operands, result, ...otherProps }) {
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