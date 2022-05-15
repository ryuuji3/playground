import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import produce from 'immer'

import BaseRouter from './BaseRouter'
import { NavigationContext } from './useNavigation'


function MemoryRouter({ children, basePath, ...routerProps }) {
    const navigation = useNavigationState({
        stack: [ basePath ],
    })

    return (
        <NavigationContext.Provider value={navigation}>
            <BaseRouter {...routerProps} basePath={basePath}>
                {children}
            </BaseRouter>
        </NavigationContext.Provider>
    )
}

MemoryRouter.propTypes = {
    basePath: PropTypes.string,
}

MemoryRouter.defaultProps = {
    basePath: '/',
}

function useNavigationState({ stack }) {
    const [ navigation, dispatch ] = useReducer(reducer, {
        stack,
    })

    return {
        get stack() {
            return navigation.stack
        },
        get currentLocation() {
            const path = navigation.stack[navigation.stack.length - 1]

            return new URL(path, 'relative://')
        },
        push(path) {
            dispatch({ type: ACTIONS.PUSH, path })
        },
    }
}

function reducer(navigation, { type, ...payload }) {
    switch(type) {
        case ACTIONS.PUSH:
            return produce(navigation, draft => {
                draft.stack.push(payload.path)
            })
        default:
            return navigation
    }
}

const ACTIONS = {
    PUSH: 'PUSH',
}

export default MemoryRouter