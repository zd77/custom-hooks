export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case '[TODO] ADD TODO':
            return [ ...initialState, action.payload ]
        case '[TODO] REMOVE TODO':
            return initialState.filter( todo => todo.id !== action.payload )
        case '[TODO] TOGGLE TODO':
            return initialState.map( todo => {
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                }
                return todo
            })
        default:
            return initialState
    }
}