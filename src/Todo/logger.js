function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('PREV STATE: ', prevState)
        console.log('action: ', action)

        const newState = reducer(prevState, action)

        console.log('next stage:', newState)
        console.groupEnd()

        return newState
    }
}

export default logger;