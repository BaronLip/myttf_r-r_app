const initialState = {
	username: '',
	email: '',
	password: '',
	errors: ''
}

const signUpReducer = (state = initialState, action) => {
	console.log(state, action);
	switch (action.type) {
		case "SIGNUP":
			return {
				player: action.player
			}
	default:
		return state;
	}
}

export default signUpReducer;