export const updateLoginForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_LOGIN_FORM",
        name, value
    }
}