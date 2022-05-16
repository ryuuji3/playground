import { useEffect, useReducer } from 'react'

import useRouter from "./useRouter";


export default function useRoute({ name, path, unmatched }) {
    const router = useRouter()

    if (!router) {
        throw new Error('useRoute must be used within a Router')
    }

    const [ route ] = useReducer(reducer, {
        router,
        name,
        path: unmatched 
            ? null
            : path ?? router.basePath,
        unmatched,
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