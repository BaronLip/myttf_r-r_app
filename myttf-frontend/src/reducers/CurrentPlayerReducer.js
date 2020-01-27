export default (state =
    {
        "player": {
            "username": "",
            // "profileImage": "",
            // "wins": 0,
            // "losses": 0,
        } 
    }
    , action) => {

    switch (action.type) {
        case "SET_CURRENT_PLAYER":
            return action.player

        default:
            return state;
    }
}