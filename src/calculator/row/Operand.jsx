import React from 'react'

import { useCalculator } from '../hooks'

import getLabel from './getLabel'


function Operand({ label, name, value }) {
    const { setOperand } = useCalculator()

    function handleChange(event) {
        setOperand(name, event.target.value)
    }

    return (
        <div className="operand">
            <label htmlFor={name}>{getLabel(label, value)}</label>
            <input name={name} type="number" inputMode="decimal" value={value} onChange={handleChange} />
        </div>
    )
}

export default Operand