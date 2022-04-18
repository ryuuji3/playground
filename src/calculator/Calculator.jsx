import React, { createContext } from 'react'
import styled from 'styled-components'

import { useCalculatorState } from './hooks'
import Row from './row'

export const CalculatorContext = createContext()



export default function Calculator({
    initialRows = [],
}) {
    const calculator = useCalculatorState(initialRows)
    const calculatorRows = calculator.rows.map(row => (<Row {...row} key={row.name} />))

    return (
        <CalculatorContext.Provider value={calculator}>
            <Container>
                {calculatorRows}
            </Container>
        </CalculatorContext.Provider>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    padding: 2rem 1rem;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-sizing: border-box; 

    max-width: 80%;
`