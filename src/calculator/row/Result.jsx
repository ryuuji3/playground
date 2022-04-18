import React from 'react'

import { useCalculator } from '../hooks'

import getLabel from './getLabel'


function Result({ label, name }) {
    const { calculate, getRowsBeforeResult } = useCalculator()
    const operands = getRowsBeforeResult(name).map(row => row.name)
    const result = calculate(name)

    return (
        <div className="result">
            <label htmlFor={name}>{getLabel(label, result)}</label>
            <output name={name} htmlFor={operands.join(" ")}>{result}</output>
        </div>
    )
}

export default Result