import { enableAllPlugins } from 'immer'

enableAllPlugins()

// Components
export { default as MemoryRouter } from './MemoryRouter'
export { default as Route } from './Route'

// Hooks
export { default as useRoute } from './useRoute'
export { default as useNavigation } from './useNavigation'