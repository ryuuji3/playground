import { useEffect, useReducer } from 'react'

import { useRouter } from "./Router";


export default function useRoute({ name, path }) {
    const router = useRouter()

    if (!router) {
        throw new Error('useRoute must be used within a Router')
    }

    const [ route ] = useReducer(reducer, {
        router,
        name,
        path: path ?? router.basePath,
    })

    // Register/unregister our route with the router
    useEffect(() => {
        router.addRoute(route)

        return () => router.removeRoute(route)
    })

    return {
        get isActive() {
            return router.isRouteActive(route)
        }
    }
}

function reducer(route) {
    return route
}