export const updateLoginForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_LOGIN_FORM",
        name, value
    }
}

export const login = (e) => {
    let username = e.target[0].value;
    let password = e.target[1].value;
    console.log(username, password)
    
    // connect to backend?
}