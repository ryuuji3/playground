function getLabel(label, value) {
    return typeof label === 'function'
        ? label(value)
        : label // does not use value
}

export default getLabel