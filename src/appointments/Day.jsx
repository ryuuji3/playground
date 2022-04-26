import React from 'react'
import styled from 'styled-components'


function Day({ day }) {
    return <Container>
        <div className="day-of-week">
            {getDayOfWeekFromNumber(day.day)}
        </div>
        <div className="month-day">
            {getMonthFromNumber(day.month)} {day.date}
        </div>
    </Container>

}

function getDayOfWeekFromNumber(dayNumber) {
    switch (dayNumber) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default: throw new Error(`Invalid day number ${dayNumber}`);
    }
}

function getMonthFromNumber(monthNumber) {
    switch (monthNumber) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: throw new Error(`Invalid month number ${monthNumber}`);
    }
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