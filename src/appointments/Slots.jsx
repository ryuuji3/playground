import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import Slot from './Slot'
import { SlotsByDays } from './selectors'


function Slots(props) {
    const slotsByDay = useRecoilValue(SlotsByDays)

    return (
        <Container {...props}>
            {slotsByDay.map(day => (
                <div className="column" key={day.date}>
                    {day.map(slot => (<Slot key={slot} slot={slot} />))}
                </div>
            ))}
        </Container>
    )
}

const Container = styled.div`
    > .column {
        display: flex;
        flex-direction: column;

        row-gap: 8px;
    }
`

export default Slots