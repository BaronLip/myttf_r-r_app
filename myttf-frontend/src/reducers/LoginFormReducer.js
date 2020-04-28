const initialState = {
    username: "",
    email: "",
    password: "",
    errors: ""
}

export default (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            debugger
            console.log(action.formData);
            return action.formData;

        case "reducer":
            console.log("LoginFormReducer");
            return action.formData;

        default:
            return state;
    }

}