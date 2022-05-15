import React, { createContext, useContext } from 'react'
import useRouterState from './useRouterState'

const RouterContext = createContext()


function Router({ children, basePath, routes }) {
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

export function useRouter() {
    const context = useContext(RouterContext)

    if (!context) {
        throw new Error('useRouter must be used within a Router')
    }

    return context
}

export default Router