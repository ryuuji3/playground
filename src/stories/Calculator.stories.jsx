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
            name: 'a',
            label: 'Initial value',
            value: 5,
        },
        {
            name: 'b',
            label: value => `Add ${value}`,
            operator: '+',
            value: 1,
        },
        {
            name: 'c',
            label: value => `Multiply by ${value}`,
            operator: '*',
            value: 4,
        },
        {
            name: 'd',
            label: value => `Divide by ${value}`,
            operator: '/',
            value: 2,
        },
        {
            name: 'e',
            label: value => `Subtract ${value}`,
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

export const MultiResults = Template.bind({})
MultiResults.args = {
    rows: [
        {
            name: 'a',
            label: 'Initial value',
            value: 5,
        },
        {
            name: 'c',
            label: 'Multiply',
            operator: '*',
            value: 2,
        },
        {
            name: 'result1',
            label: 'Result 1',
            operator: '=',
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
            name: 'result2',
            label: 'Result 2',
            operator: '=',
        },
    ],
}

export const GroupedRows = Template.bind({})
GroupedRows.args = {
    rows: [
        {
            name: 'a',
            label: 'Initial value',
            value: 5,
        },
        {
            name: 'b',
            label: 'Subtract',
            operator: '-',
            value: 2,
        },
        {
            name: 'first-result',
            label: 'First Result',
            operator: '=',
        },
        {
            name: 'c',
            label: 'Multiply',
            operator: '*',
            rows: [
                {
                    name: 'c.a',
                    label: 'Initial value',
                    value: 7,
                },
                {
                    name: 'c.b',
                    label: 'Subtract',
                    operator: '-',
                    value: 2,
                },
                {
                    name: 'result-embedded',
                    label: 'Embedded result',
                    operator: '=',
                },
            ],
        },
        {
            name: 'result',
            label: 'Result',
            operator: '=',
        },
    ],
}