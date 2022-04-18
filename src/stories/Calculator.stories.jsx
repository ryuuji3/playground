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
    initialRows: [
        {
            name: 'a',
            label: 'Initial value',
            value: 5,
        },
        {
            name: 'b',
            label: 'Add',
            operator: '+',
            value: 1,
        },
        {
            name: 'c',
            label: 'Multiply',
            operator: '*',
            value: 4,
        },
        {
            name: 'd',
            label: 'Divide',
            operator: '/',
            value: 2,
        },
        {
            name: 'e',
            label: 'Subtract',
            operator: '-',
            value: 2,
        },
        {
            name: 'result',
            label: 'Result',
            operator: '=',
        },
    ],
}