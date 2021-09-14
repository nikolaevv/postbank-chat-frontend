const initialState = {
    messages: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGES':
            return {
                ...state,
                messages: action.payload
            }

        default:
            return state;
    }
};

export default reducer;