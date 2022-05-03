import React, { Fragment } from 'react'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'

import Row from './row'
import OPERATORS from './definitions/Operators'

export default function Calculator({
    rows = [],
}) {
    return (
        <RecoilRoot>
            <Container>
                {rows.map(row => (
                    <Fragment key={row.name}>
                        {row.operator === OPERATORS.EQUALS && <hr />}
                        <Row initialValue={row.value} className="row" {...row} />
                    </Fragment>
                ))}
            </Container>
        </RecoilRoot>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid: [row-start] 1fr [row-end] / 
        [operator] min-content 
        [label] 1fr 
        [number] 1fr;
    gap: 1rem;

    > .row {
        display: contents;
    }

    > hr {
        border: 1px solid black;
        width: 100%;
        grid-column: span 3;
    }

    margin: 0 auto;
    padding: 2rem 1rem;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-sizing: border-box;

    /* Predictable sizing algorithm */
    * {
        box-sizing: inherit;
    }
`