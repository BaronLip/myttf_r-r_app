export const updateSignUpForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_LOGIN_FORM",
        name, value
    }
}

export const signUp = (e) => {
    let username = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;
    console.log(username, email, password)
    
    e.preventDefault();
    // connect to backend?
}