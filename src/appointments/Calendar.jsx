import React from 'react'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import Header from './Header'
import Slots from './Slots'


function Calendar() {
    return (
        <RecoilRoot>
            <Container>
                <Header className="row" />
                <Slots className="row" />
            </Container>
        </RecoilRoot>
    )
}

const Container = styled.div`
    display: grid;
    row-gap: 1rem;

    grid-template-rows: min-content 1fr;

    background-color: #ECF8F8;
    > .row {
        display: grid;

        column-gap: 1rem;

        grid-auto-columns: minmax(0, 1fr);
        grid-auto-flow: column;
    }
`

export default Calendar