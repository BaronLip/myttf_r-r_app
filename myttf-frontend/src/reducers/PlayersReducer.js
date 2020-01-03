console.log("reducers/PlayersReducer.js")

// Sets an initial state for a Player and will be overwritten by fetch within Dashboard.js
export default (state = 
    [
        {   
            username: "",
            email: "",
            password: "",
            profileImage: "",
            wins: 0,
            losses: 0,
            matches: []
        }
    ]
    , action) => {
    
    switch (action.type) {

        case "FETCH_PLAYER":
            console.log("You're fetching a player", state, action);
            // debugger
            return [...state];

        case "SHOW_PLAYER":
            console.log("You're showing a player", state, action);
            // debugger
            return [state[0] = action.player]

        case "ADD_PLAYER":
            console.log("You're adding a player", state, action);
            debugger
            return [...state, action.player];

        default:
            return state;
    }
}