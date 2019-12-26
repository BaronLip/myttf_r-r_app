// player arg is equal to "data" from Dashboard's fetch call.
export const addPlayer = (player) => {
    console.log("actions/PlayerActions.js addPlayer", player);
    return { type: "ADD_PLAYER", player };
}