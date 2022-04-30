import { atom, selector } from "recoil";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { v4 as uuid } from 'uuid'

dayjs.extend(utc)

export const NumberOfDisplayedDays = atom({
    key: "numberOfDisplayedDays",
    default: 5,
})

export const Availability = atom({
    key: "availability",
    default: selector({
        key: 'generatedAvailability',
        get({ get }) {
            const today = dayjs.utc().startOf('day')
            // Generate enough to show page arrows
            // (including previous week just to prove we dont allow them to view it)
            const displayedDays = get(NumberOfDisplayedDays)
            const daysToGenerate = displayedDays * 4;
            const hourIncrements = 1;
            // TODO: const timezoneOffset = -4;
        
            const availability = []
        
            for (let day = -displayedDays, generatedDays = 0; generatedDays < daysToGenerate; day++) {
                const date = today.add(day, 'day');
        
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
    }),
})

export const SelectedSlotId = atom({
    key: "selectedSlot",
    default: null,
})