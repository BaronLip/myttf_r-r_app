// player arg is equal to "data" from Dashboard's fetch call.
export const addPlayer = (player) => {
    console.log("actions/PlayerActions.js addPlayer", player);
    return { type: "ADD_PLAYER", player };
}

export const fetchPlayer = (player) => {
    console.log("actions/Playeractions.js setPlayer", player);
    
    return (dispatch) => {
    dispatch({type: "FETCH_PLAYER"});
        
    fetch("http://localhost:3000/api/v1/players/1")
    .then(response => response.json())
    .then(player => addPlayer(player))
    };
}
