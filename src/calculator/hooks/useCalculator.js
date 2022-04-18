import { useContext } from 'react'

import { CalculatorContext } from '../Calculator'


function useCalculator() {
    return useContext(CalculatorContext)
}

export default useCalculator