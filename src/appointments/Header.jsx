import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { DisplayedDays } from './selectors'
import Day from './Day'
import Row from './Row'


function Header({ className }) {
    const days = useRecoilValue(DisplayedDays)

    return (
        <Container className={className}
            gutter={{
                left: {
                    className: "left chevron",
                    children: <span>&#12296;</span>
                },
                right: {
                    className: "right chevron",
                    children: <span>&#12297;</span>
                }
            }}
            columns={days.map(({ id, day }) => ({
                id,
                className: "column",
                children: <Day key={id} day={day} className="column" />
            }))}
        />
    )
}

const Container = styled(Row)`
    font-family: sans-serif;
    font-size: 12px;

    background-color: ${props => props.theme.colors.headerLight};

    > .column {
        padding: 1rem 1rem 0.5rem 1rem;
    }

    > .chevron {
        line-height: 16px;
        font-size: 14px;

        &.disabled {
            color: grey;
        }

        &.left {
            text-align: left;
        }

        &.right {
            text-align: right;
        }
    }
`

export default Header