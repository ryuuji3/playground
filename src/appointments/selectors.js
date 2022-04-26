import { selector } from "recoil";
import dayjs from 'dayjs'

import { Availability } from "./atoms";

export const Days = selector({
    key: 'days',
    get({ get }) {
        const availability = get(Availability);

        return availability.reduce((days, isoDate) => {
            const slot = dayjs(isoDate);
            const date = slot.get('date')

            if (!days.find(day => day.date === date)) {
                days.push({
                    day: slot.get('day'),
                    date,
                    month: slot.get('month'),
                    year: slot.get('year'),
                });
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

        return days.map(({ date, month, year }) => {
            const day = dayjs(date)
                .set('month', month)
                .set('date', date)
                .set('year', year)

            return availability.filter(isoDate => {
                const slot = dayjs(isoDate);

                return slot.isSame(day, 'date')
            })
        })
    }
})