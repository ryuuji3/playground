import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { DisplayedDays } from './selectors'
import Day from './Day'


function Header(props) {
    const days = useRecoilValue(DisplayedDays)

    return (
        <Container {...props}>
            {days.map(({ id, day }) => (
                <Day key={id} day={day} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    font-family: sans-serif;
    font-size: 12px;

    background-color: ${props => props.theme.colors.headerLight};
`

export default Header