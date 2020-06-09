import { showPlayer } from "./PlayerActions";

// Action constants:
const LOGIN = "LOGIN";
// const LOGOUT = "LOGOUT";
const ERROR = "ERROR"

// Action creators:
const loginPlayer = () => {
	return {
		type: LOGIN,
	}
}



// const logoutPlayer = () => {
//     return {
//         type: LOGOUT,
//     }
// }

const loginError = (errors) => {
    return {
        type: ERROR,
        errors: errors,
    }
}

const redirectDashboard = (player, history) => {
    history.push(`/players/${player.id}/dashboard`, player)
}

export const login = (player, historyProp) => {
    // console.log(player);
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
            if (json.errors) {
                dispatch(loginError(json.errors));
            }
            if (json.logged_in === true) {
                dispatch(loginPlayer());
                dispatch(showPlayer(json.player));
                redirectDashboard(json.player, historyProp);
            }
        })
        .catch((errors) => {
            console.log('api errors:', errors);
        })
    }
}
