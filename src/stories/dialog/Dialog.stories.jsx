import React from 'react'

import { Dialog } from '../../'
import Body from './Body'


export default {
    title: 'Dialog',
    component: Dialog,
}

function Template(args) {
    return (
        <>
            <Dialog {...args} />
            <Body />
        </>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    isOpen: true,
    message: 'Perform action?',
    messages: {
        submit: 'Yes',
        cancel: 'No',
    }
}