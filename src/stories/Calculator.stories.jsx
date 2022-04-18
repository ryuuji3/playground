import React from 'react'
import Calculator from '../calculator'

export default {
    title: 'Calculator',
    component: Calculator,
}

function Template(args) {
    return <Calculator {...args} />
}

export const Simple = Template.bind({})
Simple.args = {
    rows: [
        {
            operand: 'a',
            label: 'A',
            initialValue: 1,
        },
        {
            operand: 'b',
            label: 'B',
            operator: '+',
            initialValue: 2,
        },
        {
            operand: 'c',
            label: 'C',
            operator: '=',
        },
    ],
}