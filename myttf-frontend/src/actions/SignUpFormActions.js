// External imports
import Axios from 'axios'

// Action Constant(s)
const SIGNUP = "SIGNUP"

// Action Creator(s)
const signupUser = (player) => {
	return { 
		type: SIGNUP, 
		player: player 
	};
}

const redirect = (player, history) => {
	history.push('/login', player);
}

export const signUpPlayer = (player, history) => {
	console.log(player, history);
	return function (dispatch) {
		return Axios.post(
			'http://localhost:3001/users', {player}, {withCredentials: true}
		)
		.then( (response) => {
			console.log(response);
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