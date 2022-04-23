import React from 'react'
import styled from 'styled-components'

import { useCalculator } from '../hooks'


function Operand({ label, name, value, ...otherProps }) {
    const { setOperand } = useCalculator()

    function handleChange(event) {
        setOperand(name, event.target.value)
    }

    return (
        <Input 
            name={name} 
            type="number" 
            inputMode="decimal" 
            value={value} 
            onChange={handleChange} 
            {...otherProps}
        />
    )
}

const Input = styled.input`
    margin: 0;
    padding: 0;
    padding-left: 1rem;
    border: 1px solid black;

    height: 2rem;
`

export default Operand