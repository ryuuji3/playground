import { atom, atomFamily } from "recoil";

// So that we can find all rows regardless of their nesting 
export const RowIds = atom({
    key: 'rowIds',
    default: [],
})

// Where actual row data is stored
export const Row = atomFamily({
    key: 'row',
    default: {},
})