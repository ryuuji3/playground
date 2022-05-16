import React, { useReducer } from 'react'
import produce from 'immer'

import useNavigation from "./useNavigation";

import { RouterContext } from './useRouter'


function BaseRouter({ children, basePath, routes }) {
    const router = useRouterState({
        basePath,
        routes,
    })

    return (
        <RouterContext.Provider value={router}>
            {children}
        </RouterContext.Provider>
    )
}

function useRouterState({ basePath = "/", routes = [] }) {
    const navigation = useNavigation()
    const [ router, dispatch ] = useReducer(reducer, {
        basePath,
        routes,
    });

    return {
        get routes() {
            return router.routes
        },
        get basePath() {
            return router.basePath
        },
        hasRoute({ path }) {
            return router.routes.some(route => route.path === path)
        },
        addRoute(route) {
            if (!this.hasRoute(route)) {
                dispatch({
                    action: ACTIONS.ADD_ROUTE,
                    route,
                })
            }
        },
        removeRoute(route) {
            if (this.hasRoute(route)) {
                dispatch({
                    action: ACTIONS.REMOVE_ROUTE,
                    route,
                })
            }
        },
        isRouteActive({ path, unmatched }) {
            // Unmatched route will only be active if there is no active route
            if (unmatched) {
                return router.routes
                    .filter(route => route.unmatched !== true) // Prevent infinite loop
                    .some(this.isRouteActive) === false
            }

            return navigation.currentLocation.pathname === path
        },
    }
}

function reducer(router, { action, ...payload }) {
    switch (action) {
        case ACTIONS.ADD_ROUTE:
            return produce(router, draft => {
                draft.routes.push(payload.route)
            })
        case ACTIONS.REMOVE_ROUTE:
            return produce(router, draft => {
                draft.routes = draft.routes.filter(route => route.path !== payload.route.path)
            })
        default:
            return router
    }
}

const ACTIONS = {
    ADD_ROUTE: "ADD_ROUTE",
    REMOVE_ROUTE: "REMOVE_ROUTE",
}

export default BaseRouter