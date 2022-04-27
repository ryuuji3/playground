import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { SelectedSlot } from './selectors'


function Slot({ id, slot, onConfirm }) {
    const date = dayjs(slot)
    const [ isSelected, setIsSelected ] = useRecoilState(SelectedSlot(id))

    function handleSlotClick() {
        setIsSelected(true)
    }

    return (
        // Using multiple top-level elements to make sure each element is part of flexbox
        <>
            <Time onClick={handleSlotClick}>
                {date.format('HH:mm')}
            </Time>
            <div>
                {isSelected && <Confirm onClick={onConfirm}>Confirm</Confirm>}
            </div>
        </>
    )
}

const Time = styled.div`
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;

    border: 1px solid #A4B4BA;
    border-radius: 4px;

    background-color: #ECF8F8;

    padding: 0.5rem;
`

const Confirm = styled.button`
    display: block;
    width: 100%;
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;

    margin: 0;
    padding: 0.5rem;

    border: none;
    border-radius: 8px;
`

export default Slot