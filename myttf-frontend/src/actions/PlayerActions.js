// export const initFetchPlayer = () => {
//     console.log("actions/Playeractions.js initFetchPlayer");
//     return { type: "INIT_FETCH_PLAYER"}
// }

export const fetchPlayer = () => {
    console.log("Playeractions.js fetchPlayer");
    
    return (dispatch) => {
        dispatch({type: "FETCH_PLAYER"});
        
        fetch("http://localhost:3000/api/v1/players/1")
        .then(response => response.json())
        // .then(player => console.log(player))
        .then(player => dispatch(showPlayer(player)))
        .catch(error => console.log(error));
    };
}

export const showPlayer = (player) => {
    console.log("actions/PlayerActions.js showPlayer", player);
    return { type: "SHOW_PLAYER", player };
}

export const addPlayer = (player) => {
    console.log("actions/PlayerActions.js addPlayer", player);

    return (dispatch) => {
        // debugger
        fetch('http://localhost:3000/api/v1/players', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player)
        })
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json()
            }
            else {
                throw new Error(`${response.statusText} make sure to fill in all the blanks.`)
            }
        })
        // ...reflect the added player to the window...
        .then(player => { dispatch({ type: "ADD_PLAYER", player }) })
        // ...or show an error.
        .catch(error => alert(error));
    }
}


