import { selector } from "recoil";

import { Availability } from "./atoms";

export const Days = selector({
    key: 'days',
    get({ get }) {
        const availability = get(Availability);

        return availability.reduce((days, slot) => {
            const date = slot.get('date')

            if (!days.find(day => day.get('date') === date)) {
                days.push(slot.startOf('day'));
            }

            return days;
        }, [])
    }
})

export const SlotsByDays = selector({
    key: 'slotsbyDays',
    get({ get }) {
        const availability = get(Availability);
        const days = get(Days);

        return days.map(day => {
            return {
                day,
                slots: availability.filter(slot => {
                    return slot.isSame(day, 'date')
                })
            }
        })
    }
})