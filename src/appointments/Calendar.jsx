import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Slots from './Slots'


function Calendar() {
    return (
        <Container>
            <Header className="row" />
            <Slots className="row" />
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    row-gap: 1rem;

    grid-template-rows: min-content 1fr;

    background-color: ${props => props.theme.colors.background};
    
    > .row {
        display: grid;

        column-gap: 1rem;

        grid-auto-columns: minmax(0, 1fr);
        grid-auto-flow: column;
    }
`

export default Calendar