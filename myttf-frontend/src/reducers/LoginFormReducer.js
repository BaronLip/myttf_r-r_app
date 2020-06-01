const initialState = {
    isLoggedIn: false,
}

const loginFormReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "LOGIN_PLAYER":
            return {
                isLoggedIn: true,
                player: action.player,
            }
        case "LOGOUT":
            return {
                isLoggedIn: false,
                player: {},
            }
        default:
            return state;
    }
}

export default loginFormReducer;