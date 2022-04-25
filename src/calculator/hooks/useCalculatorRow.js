import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { RowById } from '../selectors';


function useCalculatorRow(name, initialRow) {
    if (!name) {
        throw new Error('[useCalculatorState] Name is required.')
    }

    const [ row, setRow ] = useRecoilState(RowById(name))

    // Synchronize the row state with props
    useEffect(() => {
        if (!row?.name) {
            setRow(initialRow)
        }
    }, [ setRow, initialRow, row?.name ])

    return {
        get value() {
            return row?.value ?? initialRow.value ?? 0
        },
        setValue(value) {
            setRow(row => ({
                ...row,
                value: value,
            }))
        },
    }
}

export default useCalculatorRow