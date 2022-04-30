import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import Slot from './Slot'
import { DisplayedSlots } from './selectors'
import Row from './Row'


function Slots({ className }) {
    const slotsByDay = useRecoilValue(DisplayedSlots)

    return (
        <Container 
            className={className}
            columns={slotsByDay.map(({ id: dayId, slots }) => ({
                id: dayId,
                children: (
                    <div className="column">
                        {slots.map(({ id: slotId, slot }) => (<Slot key={slotId} slot={slot} id={slotId} />))}
                    </div>
                ),
            }))}
            gutter={{
                children: <span>&nbsp;</span>
            }}
        />
    )
}

const Container = styled(Row)`
    > .column {
        display: flex;
        flex-direction: column;

        row-gap: 8px;
    }
`

export default Slots