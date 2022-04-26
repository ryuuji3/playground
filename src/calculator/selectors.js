import { selector, selectorFamily } from 'recoil'
import { Row, RowIds } from './atoms';


// Get: retrieve a row and its children by its name
// Set: add a row, passing child rows as an array of names
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

// Get all rows in a single array, regardless of nesting
export const FlatRows = selector({
    key: 'flatRows',
    get({ get }) {
        return get(RowIds)
            .map(id => get(RowById(id)))
            .map(getNestedRows(get));
    }
})

// Get fully populated top-level rows and their children
export const NestedRows = selector({
    key: "nestedRows",
    get({ get }) {
        return get(RowIds)
            .map(id => get(RowById(id)))
            .filter(row => !row.parent) // filter out nested rows
            .map(getNestedRows(get))
    }
})

// Get all rows at the same level (ie. nested rows of the same parent, or other top-level rows)
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