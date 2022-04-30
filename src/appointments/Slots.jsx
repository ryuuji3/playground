import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import Slot from './Slot'
import { DisplayedSlots } from './selectors'


function Slots({ className }) {
    const slotsByDay = useRecoilValue(DisplayedSlots)

    return (
        <Container className={className}>
            {slotsByDay.map(({ id: dayId, slots }) => (
                <div className="column" key={dayId}>
                    {slots.map(({ id: slotId, slot }) => (<Slot key={slotId} slot={slot} id={slotId} />))}
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