import React from 'react'

import { Router } from '../../../'

import BrowserChrome from './BrowserChrome'


function Browser({ children, basePath }) {
    return (
        <Router.MemoryRouter basePath={basePath}>
            <BrowserChrome path={basePath}>
                {children}
            </BrowserChrome>
        </Router.MemoryRouter>
    )
}

export default Browser