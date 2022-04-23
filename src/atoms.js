import { atom, atomFamily } from "recoil";


export const Rows = atom({
    key: 'rows',
    default: [], // Will be initialized from root component
})

export const getRowValue = atomFamily({
    key: 'row.value',
    default: null,
})