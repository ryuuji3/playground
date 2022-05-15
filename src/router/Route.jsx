import React from 'react'
import PropTypes from 'prop-types'
import useRoute from './useRoute'


function Route({ children, name, path }) {
    const route = useRoute({
        name,
        path,
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
}

Route.defaultProps = {
    name: undefined,
    path: undefined,
}

export default Route