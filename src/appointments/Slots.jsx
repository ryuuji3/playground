import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import Slot from './Slot'
import { SlotsByDays } from './selectors'


function Slots(props) {
    const slotsByDay = useRecoilValue(SlotsByDays)

    return (
        <Container {...props}>
            {slotsByDay.map(({ slots }, dayIndex) => (
                <div className="column" key={dayIndex}>
                    {slots.map((slot, slotIndex) => (<Slot key={slotIndex} slot={slot} />))}
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