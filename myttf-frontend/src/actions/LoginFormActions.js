export const login = (player) => {
    console.log(player);

    return async (dispatch) => {
        return fetch('http://localhost:3000/api/v1/login', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(player),
            credentials: 'include'
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            if (json.logged_in) {
                // debugger;
                console.log(json.player);
                // this.props.handleLogin(json.player);
                // this.redirect();
                dispatch( loginPlayer(json.player))


                // return {
                //     type: "LOGIN_PLAYER",
                //     payload: json.player
                // }
            } else {
                this.setState({
                    errors: json.data.errors
                });
            }
        })
        .catch((error) => console.log('api errors:', error))
    }

	// const redirect = () => {
	// 	this.props.history.push('/')
	// }
    
    // Returning action.type to engage reducer, include payload.
    // return {
    //     type: "LOGIN_PLAYER",
    //     player
    // }
}

export const loginPlayer = (player) => {
    console.log("Logging in player!", player);
    return { type: "LOGIN_PLAYER", player };
}