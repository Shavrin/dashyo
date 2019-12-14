const initialState = {
    windows: []
}

function rootReducer(state = initialState, action) {
    switch( action.type ) {
        case 'ADD_WINDOW':
            return Object.assign({}, state, {
                windows: state.windows.concat(action.payload)
            });
        case 'CLOSE_WINDOW':
            return Object.assign({}, state, {
                windows: state.windows.filter(window => window.id !== action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;