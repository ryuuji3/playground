import { selector, selectorFamily } from "recoil";
import { v4 as uuid } from 'uuid'

import { Availability, SelectedSlot } from "./atoms";

export const Days = selector({
    key: 'days',
    get({ get }) {
        const availability = get(Availability);

        return availability.reduce((days, { slot }) => {
            const date = slot.get('date')

            if (!days.find(({ day }) => day.get('date') === date)) {
                days.push({ id: uuid(), day: slot.startOf('day') });
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

        return days.map(({ id, day }) => {
            return {
                id,
                day,
                slots: availability
                    .filter(({ slot }) => {
                        return slot.isSame(day, 'date')
                    })
            }
        })
    }
})

const _SelectedSlot = selectorFamily({
    key: 'selectedSlot',
    get(id) {
        return ({ get }) => {
            const selected = get(SelectedSlot)

            return selected === id
        }
    },
    set(id) {
        return ({ set }, isSelected) => {
            set(SelectedSlot, isSelected ? id : null)
        }
    }
})

export {
    _SelectedSlot as SelectedSlot 
}