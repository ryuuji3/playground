import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import classNames from 'classnames'

import { SelectedSlot } from './selectors'


function Slot({ id, slot, onConfirm }) {
    const date = dayjs(slot)
    const [ isSelected, setIsSelected ] = useRecoilState(SelectedSlot(id))

    function handleSlotClick() {
        setIsSelected(true)
    }

    return (
        <Container className={classNames({ isSelected })}>
            <div
                className={classNames('time flex-item', { isSelected })}
                onClick={handleSlotClick}
            >
                {date.format('HH:mm')}
            </div>
            {isSelected && (
                <button
                    className="confirm-button flex-item"
                    onClick={onConfirm}>
                Confirm
                </button>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* 8px gap to match the gap between the time slots */
    /* plus padding of each slot */
    row-gap: calc(8px + 2 * 4px);

    text-align: center;
    font-family: sans-serif;
    font-size: 12px;

    padding: 4px;

    &.isSelected {
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 4px;
    }

    > .flex-item {
        margin: 0;
        padding: 0.5rem;
    }

    > .time {
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 4px;

        background-color: ${props => props.theme.colors.buttonLight};
        color: ${props => props.theme.colors.buttonLightText};

        &.isSelected {
            color: ${props => props.theme.colors.buttonDark};
        }
    }

    > .confirm-button {
        display: block;
        width: 100%;

        background-color: ${props => props.theme.colors.buttonDark};
        color: ${props => props.theme.colors.buttonDarkText};

        border: none;
        border-radius: 4px;
    }
`

export default Slot