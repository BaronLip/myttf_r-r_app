// External imports
import Axios from 'axios'

// Action Constant(s)
const SIGNUP = "SIGNUP"
const ERROR = "ERROR"

// Action Creator(s)
const signupUser = (player) => {
	return { 
		type: SIGNUP, 
		player: player 
	};
}

const signUpError = (errors) => {
	return {
		type: ERROR,
		errors: errors,
	}
}

const redirect = (player, history) => {
	history.push('/api/v1/login', player);
}

export const signUpPlayer = (player, history) => {
	console.log(player, history);
	return function (dispatch) {
		return Axios.post(
			'http://localhost:3000/api/v1/players', {player}, {withCredentials: true}
		)
		.then( (response) => {
			console.log(response);
			if (response.data.errors) {
                dispatch(signUpError(response.data.errors))
            }
			if (response.data.status === 'created') {
				let player = response.data.player;
				// Dispatch using action creator
				dispatch(signupUser(player));
				// Call redirect()
				redirect({player: player}, history);
			}
		})
		.catch(error => console.log('api errors:', error))
	}
}