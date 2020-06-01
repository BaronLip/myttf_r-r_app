// Action constants:
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Action creators:
const loginPlayer = (player) => {
	console.log(player)
	return {
		type: LOGIN,
		player,
	}
}

const logoutPlayer = () => {
    return {
        type: LOGOUT,
    }
}

const redirectDashboard = (player, history) => {
    history.push('/api/v1/dashboard', player)
}

export const login = (player, historyProp) => {
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
            dispatch(loginPlayer(json.player))
            if (json.logged_in === true) {
                redirectDashboard(json.player, historyProp)
            }
        })
        .catch((error) => console.log('api errors:', error))
    }
}

// export const loginPlayer = (player) => {
//     console.log("Logging in player!", player);
//     return { type: "LOGIN_PLAYER", player };
// }