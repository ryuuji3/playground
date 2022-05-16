import React from 'react'
import PropTypes from 'prop-types'
import useRoute from './useRoute'


function Route({ children, name, path, unmatched }) {
    const route = useRoute({
        name,
        path,
        unmatched,
    })

    if (!route.isActive) {
        return null // don't render inactive routes
    }

    return (
        <>
            {children}
        </>
    )
}

Route.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node.isRequired,
    path: PropTypes.string, // No path means the route assumes router's basePath (ie. home screen)
    unmatched: PropTypes.bool, // If true, this will match any path that isn't a registered route (ie. fallback)
}

Route.defaultProps = {
    name: undefined,
    path: undefined,
    unmatched: false,
}

export default Route