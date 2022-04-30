import { atom } from "recoil";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { v4 as uuid } from 'uuid'

dayjs.extend(utc)

export const Availability = atom({
    key: "Availability",
    default: generateAvailability(),
})

function generateAvailability() {
    const today = dayjs.utc().startOf('day')
    const days = 5;
    const hourIncrements = 1;
    // TODO: const timezoneOffset = -4;

    const availability = []

    for (let day = 0, generatedDays = 0; generatedDays < days; day++) {
        const date = dayjs.utc(today).add(day, 'day');

        if (date.get('day') === 0 || date.get('day') === 6) {
            continue; // skip weekends
        }

        for (let hour = 9; hour < 18; hour += hourIncrements) {
            if (Math.random() > 0.5) {
                availability.push(
                    { id: uuid(), slot: date.set('hour', hour) }
                );
            }
        }

        generatedDays++;
    }

    return availability
}

export const SelectedSlot = atom({
    key: "SelectedSlot",
    default: null,
})