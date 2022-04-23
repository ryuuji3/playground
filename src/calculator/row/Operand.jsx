import React from 'react'
import styled from 'styled-components'


function Operand({ label, name, value, onChange, ...otherProps }) {
    function handleChange(event) {
        onChange(event.target.value)
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