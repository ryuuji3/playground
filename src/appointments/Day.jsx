import React from 'react'
import styled from 'styled-components'


function Day({ day }) {
    return <Container>
        <div className="day-of-week">
            {day.format('dddd')}
        </div>
        <div className="month-day">
            {day.format('MMMM D')}
        </div>
    </Container>

}

const Container = styled.span`
    padding: 0.5rem 1rem;
    text-align: center;

    > .day-of-week {
        color: black;
    }

    > .month-day {
        color: #6A787C;
    }
`

export default Day