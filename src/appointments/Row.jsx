import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'


function Row({ className, columns = [], gutter, children }) {
    if (children) {
        throw new Error('Row does not take children. Please use props.columns instead.')
    }

    return (
        <Container className={className}>
            {gutter && <Gutter {...(gutter.left ?? gutter)} />}
            {columns.map(({ className: columnClassName, children }, columnIndex) => (
                <div className={classNames('column', columnClassName)} key={columnIndex}>
                    {children}
                </div>
            ))}
            {gutter && <Gutter {...(gutter.right ?? gutter)} />}
        </Container>
    )
}

function Gutter({ className, children }) {
    return (
        <span className={classNames('gutter column', className)}>
            {children}
        </span>
    )
}

const Container = styled.div`
    display: grid;

    column-gap: 1rem;

    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;

    > .column {
        display: flex;
        flex-direction: column;

        row-gap: 8px;
    }
`

export default Row