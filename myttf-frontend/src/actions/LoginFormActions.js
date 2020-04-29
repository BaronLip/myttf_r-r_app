export const login = (player) => {
    console.log(player);

    fetch('http://localhost:3000/api/v1/login', { 
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
        debugger;
		console.log(this)
		if (json.logged_in) {
			this.props.handleLogin(json.player);
			this.redirect();
		} else {
			this.setState({
				errors: json.data.errors
			});
		}
	})
	.catch((error) => console.log('api errors:', error))

	// const redirect = () => {
	// 	this.props.history.push('/')
	// }
    
    // Returning action.type to engage reducer, include payload.
    return {
        type: "LOGIN_PLAYER",
        player
    }
}