// Synchronous action creators
export const setCurrentPlayer = (player) => {
    return {
        type: "SET_CURRENT_PLAYER",
        player: player
    }
}


// Async action creators:
export const login = (credentials) => {
    return {
        return dispatch => {
            return fetch ("http://localhost:3000/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    
                },
                body: JSON.stringify(credentials)
            })
        }
    }
}