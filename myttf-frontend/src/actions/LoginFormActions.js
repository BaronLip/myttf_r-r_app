export const updateLoginForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_LOGIN_FORM",
        name, value
    }
}

export const login = (e) => {
    debugger
    let username = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;
    console.log(username, email, password)
    
    // connect to backend?
}