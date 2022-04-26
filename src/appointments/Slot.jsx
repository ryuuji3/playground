import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'


function Slot({ slot }) {
    const date = dayjs(slot)

    return (
        <Container>
            {date.format('HH:mm')}
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;

    border: 1px solid #A4B4BA;
    border-radius: 4px;

    background-color: #ECF8F8;

    padding: 0.5rem;
`

export default Slot