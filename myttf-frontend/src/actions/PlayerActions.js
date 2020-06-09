// export const initFetchPlayer = () => {
//     console.log("actions/Playeractions.js initFetchPlayer");
//     return { type: "INIT_FETCH_PLAYER"}
// }

// Action constants:
const SHOW_PLAYER = "SHOW_PLAYER";
const ADD_PLAYER = "ADD_PLAYER";

// Action creators:
export const showPlayer = (player) => {
    console.log("PlayerActions.js showPlayer", player);
    return { type: SHOW_PLAYER, player };
}

export const addPlayer = (player) => {
    console.log("PlayerActions.js addPlayer", player);
    return { type: ADD_PLAYER, player };
}

// Fetching player now happens in the login phase. 
// It is now 
// export const fetchPlayer = (player) => {
//     console.log("Playeractions.js fetchPlayer", player);
    
//     return (dispatch) => {
//         fetch("http://localhost:3000/api/v1/players/1")
//         // .then(response => console.log(response.json()))
//         .then(response => response.json())
//         .then(player => dispatch(showPlayer(player)))
//         .catch(error => console.log(error));
//     };
// }



