import dayjs from 'dayjs'
import React from 'react'
import styled from 'styled-components'


function Day({ day, className }) {
    return <Container className={className}>
        <div className="day-indicator">
            <Pill day={day} />
        </div>
        <div className="day-of-week">
            {day.format('dddd')}
        </div>
        <div className="month-day">
            {day.format('MMMM D')}
        </div>
    </Container>
}

function Pill({ day }) {
    const today = dayjs().startOf('day')
    const tomorrow = today.add(1, 'day')

    const isToday = day.isSame(today, 'day')
    const isTomorrow = day.isSame(tomorrow, 'day')

    if (isToday) {
        return <span className="pill">Today</span>
    }

    if (isTomorrow) {
        return <span className="pill">Tomorrow</span>
    }

    // Don't display a pill
    return null
}

const Container = styled.span`
    text-align: center;

    position: relative;

    > .day-indicator {
        width: 100%;
        top: -0.5rem;
        left: 0;

        position: absolute;

        text-align: center;

        & > .pill {
            padding: 2px 10px;
            background-color: ${props => props.theme.colors.headerDark};
            border-radius: 16px;
        }
    }

    > .day-of-week {
        color: black;
    }

    > .month-day {
        color: #6A787C;
    }
`

export default Day