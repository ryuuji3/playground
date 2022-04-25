import { atom, atomFamily } from "recoil";

// Discovering all rows
export const RowIds = atom({
    key: 'rowIds',
    default: [],
})

// Where actual row data is stored
export const Row = atomFamily({
    key: 'row',
    default: {},
})