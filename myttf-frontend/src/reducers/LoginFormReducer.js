const initialState = {
    username: "",
    email: "",
    password: "",
    errors: ""
}

export default (state = initialState, action) => {

    switch (action.type) {
        
        case "LOGIN_PLAYER":
            console.log("LoginFormReducer");
            console.log(action)
            return action.formData;

        default:
            return state;
    }

}