const initialState = {
    isLoggedIn: false,
    errors: null
}

const loginFormReducer = (state = initialState, action) => {
    console.log(state, action);
    debugger;
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                player: action.player,
            }
        case "LOGOUT":
            return {
                isLoggedIn: false,
                player: {},
            }
        case "ERROR":
            return {
                errors: action.errors
            }
        default:
            return state;
    }
}

export default loginFormReducer;