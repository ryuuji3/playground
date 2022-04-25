import { selector, selectorFamily } from 'recoil'
import { Row, RowIds } from './atoms';


export const RowById = selectorFamily({
    key: "rowById",
    get(id) {
        return ({ get }) => {
            const row = get(Row(id));

            // Get child rows before returning
            return getNestedRows(get)(row);
        }
    },
    set(id) {
        return ({ set }, row) => {
            set(Row(id), row);
            set(RowIds, rowIds => rowIds.concat(id));
        }
    }
})

export const FlatRows = selector({
    key: 'flatRows',
    get({ get }) {
        return get(RowIds)
            .map(id => get(RowById(id)))
            .map(getNestedRows(get));
    }
})

export const NestedRows = selector({
    key: "nestedRows",
    get({ get }) {
        return get(RowIds)
            .map(id => get(RowById(id)))
            .filter(row => !row.parent) // filter out nested rows
            .map(getNestedRows(get))
    }
})

export const SiblingRows = selectorFamily({
    key: "siblingRows",
    get(id) {
        return ({ get }) => {
            const row = get(Row(id));

            if (row.parent) {
                // nested
                return get(FlatRows)
                    .filter(r => r.parent === row.parent)
                    .map(getNestedRows(get)); 
            }

            return get(FlatRows)
                .filter(r => !r.parent) // remove nested rows
        }
    }
})

function getNestedRows(get) {
    return row => ({
        ...row,
        ...(Array.isArray(row.rows) && {
            // recursion for even more nesting
            rows: row.rows.map(getNestedRows(get)),
        }),
    })
}