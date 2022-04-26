import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { Days } from './selectors'
import Day from './Day'


function Header(props) {
    const days = useRecoilValue(Days)

    return (
        <Container {...props}>
            {days.map(day => (
                <Day key={day.date} day={day} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    background-color: rgba(0, 112, 160, 0.2);
`

export default Header