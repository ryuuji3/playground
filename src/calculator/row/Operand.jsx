import React from 'react'
import styled from 'styled-components'

import { useCalculator } from '../hooks'

import getLabel from './getLabel'


function Operand({ label, name, value, ...otherProps }) {
    const { setOperand } = useCalculator()

    function handleChange(event) {
        setOperand(name, event.target.value)
    }

    return (
        <Container {...otherProps}>
            <label htmlFor={name}>{getLabel(label, value)}</label>
            <input name={name} type="number" inputMode="decimal" value={value} onChange={handleChange} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    column-gap: 1rem;

    margin-left: 2rem; /* Space for operator */
    margin-bottom: 1rem;

    > label {
        flex: 2;
        color: black;
        align-self: center;
    }

    > input {
        flex: 1;

        margin: 0;
        padding: 0;
        padding-left: 1rem;
        border: 1px solid black;

        height: 2rem;
    }
`

export default Operand