import React, { createContext } from 'react'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'

import { useCalculatorState } from './hooks'
import Row from './row'

export const CalculatorContext = createContext()



export default function Calculator({
    rows = [],
}) {
    const calculator = useCalculatorState(rows)
    const calculatorRows = calculator.rows.map(row => (<Row {...row} key={row.name} className="row" />))

    return (
        <RecoilRoot>
            <CalculatorContext.Provider value={calculator}>
                <Container>
                    {calculatorRows}
                </Container>
            </CalculatorContext.Provider>
        </RecoilRoot>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    row-gap: 1rem;

    margin: 0 auto;
    padding: 2rem 1rem;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-sizing: border-box; 

    max-width: 50%;
`