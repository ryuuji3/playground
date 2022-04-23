import React from 'react'
import styled from 'styled-components'

import { useCalculator } from '../hooks'

import getLabel from './getLabel'


function Result({ label, name, ...otherProps }) {
    const { calculate, getRowsBeforeResult } = useCalculator()
    const operands = getRowsBeforeResult(name).map(row => row.name)
    const result = calculate(name)

    return (
        <Container {...otherProps}>
            <label htmlFor={name}>{getLabel(label, result)}</label>
            <output name={name} htmlFor={operands.join(" ")}>{result}</output>
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

    > output {
        flex: 1;

        margin: 0;
        padding: 0;
        padding-left: 1rem;
        border: 1px solid black;

        height: 2rem;
    }
`

export default Result