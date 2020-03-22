export const updateLoginForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_LOGIN_FORM",
        name, value
    }
}

export const login = (e) => {
    e.preventDefault();
    
    let username = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    let player = {
        username: username,
        email: email,
        password: password
    };

    console.log(player);
    
    // return an action to engage reducer.
    return {
        type: "reducer",
        player
    }
}