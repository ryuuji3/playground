import dayjs from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { selector, selectorFamily } from "recoil";
import { v4 as uuid } from 'uuid'

import { Availability, NumberOfDisplayedDays, SelectedSlotId } from "./atoms";

dayjs.extend(isSameOrAfter)

// Regardless of what days we're displaying, 
// we need to render the header with an arrow to navigate to next set of days.
export const AvailabilityDays = selector({
    key: 'availabilityDays',
    get({ get }) {
        const availability = get(Availability);

        return availability
            .reduce((days, { slot }) => {
                const date = slot.get('date')

                if (!days.find(({ day }) => day.get('date') === date)) {
                    days.push({ id: uuid(), day: slot.startOf('day') });
                }

                return days;
            }, [])
    }
})

// Used by header
export const DisplayedDays = selector({
    key: 'displayedDays',
    get({ get }) {
        return get(AvailabilityDays)
            .slice(0, get(NumberOfDisplayedDays)) // only show up to the number of days
    }
})

export const SlotsByDays = selector({
    key: 'slotsbyDays',
    get({ get }) {
        const availability = get(Availability);
        const days = get(AvailabilityDays);

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

export const DisplayedSlots = selector({
    key: 'displayedSlots',
    get({ get }) {
        const displayedDayIds = get(DisplayedDays)
            .map(({ id }) => id)
            
        return get(SlotsByDays)
            .filter(({ id: dayId }) => displayedDayIds.includes(dayId))
    }
})

export const SelectedSlot = selectorFamily({
    key: 'selectedSlot',
    get(id) {
        return ({ get }) => {
            const selected = get(SelectedSlotId)

            return selected === id
        }
    },
    set(id) {
        return ({ set }, isSelected) => {
            set(SelectedSlotId, isSelected ? id : null)
        }
    }
})