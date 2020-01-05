// export const initFetchPlayer = () => {
//     console.log("actions/Playeractions.js initFetchPlayer");
//     return { type: "INIT_FETCH_PLAYER"}
// }

export const fetchPlayer = () => {
    console.log("Playeractions.js fetchPlayer");
    
    return (dispatch) => {
        // dispatch({type: "FETCH_PLAYER"});
        fetch("http://localhost:3000/api/v1/players/1")
        .then(response => response.json())
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
    return { type: "ADD_PLAYER", player };
}

