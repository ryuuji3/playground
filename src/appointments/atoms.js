import { atom } from "recoil";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const Availability = atom({
    key: "Availability",
    default: generateAvailability(),
})

function generateAvailability() {
    const today = dayjs.utc().startOf('day')
    const days = 4;
    const hourIncrements = 1;
    // TODO: const timezoneOffset = -4;

    const availability = []

    for (let day = 0; day < days; day++) {
        const date = dayjs.utc(today).set('day', day);

        for (let hour = 0; hour < 24; hour += hourIncrements) {
            availability.push(
                date.set('hour', hour)
            );
        }
    }

    return availability.map(
        date => date.toISOString(),
    )
}