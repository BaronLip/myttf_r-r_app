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
            return fetch ("http://localhost:3000/")
        }
    }
}