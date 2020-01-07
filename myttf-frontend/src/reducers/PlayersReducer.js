console.log("reducers/PlayersReducer.js")

// Sets an initial state for a Player and will be overwritten by fetch within Dashboard.js
// The initial state needs to match the format of the returned state.
// This may need to change based fetch call.
export default (state = 
    {
        "player": {
            "username": "",
            "profileImage": "",
            "wins": 0,
            "losses": 0,
        },
        "matches": []
    }
    , action) => {
    
    switch (action.type) {

        // case "FETCH_PLAYER":
        //     console.log("You're fetching a player", state, action);
        //     // debugger
        //     return [...state, action.player];

        case "BOOKMARK_MATCH":
            console.log("You're bookmarking a match", state, action);
            // debugger
            //let player = state.find(player => player.id === action.match.player_id)
            //let playerIndex = state.indexOf(player)

            let bookmarkedMatch = state.matches.find(match => match.id === action.match.id)
            let index = state.matches.indexOf(bookmarkedMatch)
            
            let newMatch = {...bookmarkedMatch, bookmarked: !bookmarkedMatch.bookmarked }

            //let newPlayer = {...player, matches: [...player.matches.slice(0, index), newMatch, ...player.matches.slice(index + 1)]}
            return { ...state, matches: [...state.matches.slice(0, index), newMatch, ...state.matches.slice(index + 1)]}
            
            //[
            //    ...state.slice(0, playerIndex), newPlayer, ...state.slice(playerIndex + 1)
            //]

        case "SHOW_PLAYER":
            console.log("You're showing a player", state, action);
            // debugger
            return {...state, ...action.player}
            // return { state: {...state, ...action.player} }

        case "ADD_PLAYER":
            console.log("You're adding a player", state, action);
            // debugger
            return {player: action.player, matches: []};

        default:
            return state;
    }
}