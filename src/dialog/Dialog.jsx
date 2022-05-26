import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import { MessageProp } from './PropTypes'


function Dialog({
    message,
    messages,
    isOpen,

    onOpen,
    onClose,
}) {
    const dialog = useRef(null)
    const [ isOverlayVisible, setIsOverlayVisible ] = useState(isOpen)

    const openModal = useCallback(
        () => {
            setIsOverlayVisible(true)
            dialog.current.showModal()
            onOpen?.()
        },
        [ dialog, onOpen ]
    )

    const closeModal = useCallback(
        reason => {
            setIsOverlayVisible(false)
            dialog.current.close(reason)
            onClose?.(reason)
        },
        [ dialog, onClose]
    )

    useEffect(() => {
        if (!dialog) {
            return
        }

        if (isOpen) {
            openModal()
        } else {
            closeModal()
        }
    }, [ isOpen, dialog, openModal, closeModal ])

    function handleDismiss(reason) {
        return () => {
            closeModal(reason)
        }
    }
    
    return (
        <Container>
            <div className={classNames('overlay', { visible: isOverlayVisible })} />
            <dialog
                ref={dialog}
                onClose={() => {
                    setIsOverlayVisible(false)
                }}
            >
                <form method="dialog">
                    <p className="message">
                        {message}
                    </p>
                    <div className="buttons">
                        <button
                            data-dialog-button="dialog.cancel"
                            type="reset"
                            onClick={handleDismiss('cancel')}
                        >
                            {messages.cancel}
                        </button>
                        <button
                            data-dialog-button="dialog.submit"
                            type="submit"
                            value={'submit'}
                        >
                            {messages.submit}
                        </button>
                    </div>
                </form>
            </dialog>
        </Container>
    )
}

Dialog.propTypes = {
    isOpen: PropTypes.bool,
    message: MessageProp.isRequired,
    messages: PropTypes.shape({
        submit: MessageProp,
        cancel: MessageProp,
    }),

    onOpen: PropTypes.func,
    onClose: PropTypes.func,
}

Dialog.defaultProps = {
    isOpen: false,
    messages: {
        submit: 'OK',
        cancel: 'Cancel',
    },

    onOpen: undefined,
    onClose: undefined,
}

const Container = styled.div`
    /* Themeing */
    --_text-light: hsl(270 10% 30%);
    --_text-dark: hsl(270 5% 95%);
    --_text: var(--_text-light);

    --_background-light: hsl(270 0% 95%);
    --_background-dark: hsl(270 10% 30%);
    --_background: var(--_background-light);

    --_border-light: hsl(270 15% 50%);
    --_border-dark: var(--_background-light);

    @media (prefers-color-scheme: dark) {
        --_text: var(--_text-dark);
        --_background: var(--_background-dark);
        --_border: var(--_border-dark);
    }

    > dialog { 
        color: var(--_text);
        border-color: var(--_border);
        background-color: var(--_background);

        /* Border */
        border: 1px solid;
        border-radius: 0.25rem;

        /* Shadow */
        box-shadow: 0 0.25rem 0.5rem 0 var(--_border);
    }

    > .overlay.visible {
        position: fixed;
        top: 0;
        left: 0;

        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0.2);

        backdrop-filter: blur(0.1rem);
    }
`

export default Dialog