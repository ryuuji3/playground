import PropTypes from 'prop-types'


export const MessageProp = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
])