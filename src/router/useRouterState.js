import { useReducer } from "react";
import produce from 'immer'

function useRouterState({ basePath = "/", routes = [] }) {
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
        isRouteActive(route) {
            return false // TODO: Implement this
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

export default useRouterState