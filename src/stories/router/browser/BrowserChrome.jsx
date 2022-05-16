import React from 'react'
import styled from 'styled-components'

import UrlBar from './UrlBar'


function BrowserChrome({ children, path }) {
    return (
        <Container>
            <UrlBar initialPath={path} />
            <hr />
            <div className="preview">
                {children}
            </div>
        </Container>
    )
}

const Container = styled.div`
    > .preview {
        width: 100%;
        height: 100vh;
    }
`

export default BrowserChrome