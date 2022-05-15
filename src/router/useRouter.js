import { createContext, useContext } from 'react'

export const RouterContext = createContext()


export function useRouter() {
    const context = useContext(RouterContext)

    if (!context) {
        throw new Error('useRouter must be used within a Router')
    }

    return context
}