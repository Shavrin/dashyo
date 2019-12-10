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
            console.log(action.payload);
            const windowIndex = state.windows.findIndex(window => window.id === action.payload);
            return Object.assign({}, state, {
                windows: state.windows.splice(windowIndex, 1, action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;