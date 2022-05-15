import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { Path } from './atoms'


function UrlBar({ initialPath, className }) {
    const [ path, setPath ] = useRecoilState(Path)

    // Update atom from initialPath
    useEffect(() => {
        setPath(initialPath)
    }, [ initialPath, setPath ])

    function onChange({ target }) {
        setPath(
            target.value.startsWith('/')
            ? target.value
            : `/${target.value}`
        )
    }

    return (
        <Container className={className}>
            <span className="spacer">&nbsp;</span>
            <div className="input-bar">
                <input type="text" value={path} onChange={onChange} className="input" />
                <button type="button" className="button">Update Url</button>
            </div>
            <span className="spacer">&nbsp;</span>
        </Container>
    )
}

const Container = styled.div`
    display: grid;

    grid-template-columns: minmax(0, 1fr) 1fr minmax(0, 1fr);

    color: black;
    font-family: sans-serif;
    
    > .input-bar {
        display: flex;
        flex-direction: row;
        position: relative;

        border: 1px solid black;

        > .input {
            flex: 1;
            display: block;

            border: none;

            padding: 1rem;

            font-family: sans-serif;
            font-size: 1rem;
        }

        > .button {
            /* Browser reset */
            margin: 0;
            border: none;

            padding: 0 1rem;

            text-align: center;

            background-color: white;

            &:hover {
                background-color: lightgray;
                transition: background-color 0.2s ease-in-out;
            }
        }
    }
`

export default UrlBar