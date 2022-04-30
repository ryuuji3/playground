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

    --row-gap: calc(8px + 4px * 2 + 1px * 2);
    --padding: 4px;
    --border: 1px;

    /* 8px row-gap to match gap between slots */
    /* padding of each flex-item (4px * 2) */
    /* border of each item (1px * 2) */
    row-gap: var(--row-gap);

    text-align: center;
    font-family: sans-serif;
    font-size: 12px;

    padding: var(--padding);

    /* for animation */
    transition: max-height 0.2s ease-in-out;
    max-height: 50px;

    box-sizing: border-box;
    border: var(--border) solid transparent; /* consistent sizing */

    &.isSelected {
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 4px;
        
        /* for animation */
        /* each flex-item (16px line-height + 12px vertical padding) */
        /* padding of container (4px * 2) */
        /* row-gap */
        /* border of container (1px * 2) */
        max-height: calc((16px + 12px * 2) * 2 + (var(--padding) * 2) + var(--row-gap) + (var(--border) * 2));
    }

    > .flex-item {
        margin: 0;
        padding: 12px 32px;
    }

    > .time {
        border: var(--border) solid ${props => props.theme.colors.border};
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

        transition: background-color 0.2s ease-in-out;

        font-size: 12px;
        line-height: 16px;

        &:hover {
            background-color: ${props => props.theme.colors.buttonDarkHover};
        }
    }
`

export default Slot