import { createContext, useContext } from "react"

export const NavigationContext = createContext()

export default function useNavigation() {
    return useContext(NavigationContext)
}