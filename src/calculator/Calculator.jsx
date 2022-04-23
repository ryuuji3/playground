import React from 'react'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'

import Row from './row'
import { Rows } from '../atoms'

export default function Calculator({
    rows = [],
}) {
    return (
        <RecoilRoot initializeState={({ set }) => {
            set(Rows, rows)
        }}>
            <Container>
                {rows.map(row => (<Row key={row.name} className="row" {...row} />))}
            </Container>
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