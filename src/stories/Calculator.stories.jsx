import React from 'react'
import Calculator from '../calculator'

export default {
    title: 'Calculator',
    component: Calculator,
}

function Template() {
    return <Calculator />
}

export const _Calculator = Template.bind({})
_Calculator.storyName = "Calculator"