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
    
    //***** PLAYER REDUCERS: *****
        case "FETCH_PLAYER":
            console.log("You're fetching a player", state, action);
            // debugger
            return [...state, action.player];

        case "SHOW_PLAYER":
            console.log("You're showing a player", state, action);
            return { ...state, ...action.player }


    //***** MATCH REDUCERS: *****
        case "BOOKMARK_MATCH":
            console.log("You're bookmarking a match", state, action);

            let bookmarkedMatch = state.matches.find(match => match.id === action.match.id)
            let index = state.matches.indexOf(bookmarkedMatch)
            let newMatch = {...bookmarkedMatch, bookmarked: !bookmarkedMatch.bookmarked }

            return { ...state, matches: [...state.matches.slice(0, index), newMatch, ...state.matches.slice(index + 1)]}
        
        case "ADD_MATCH":
            console.log("You're adding a match", state, action);
            const addMatch = { ...action.match };
            // debugger
            return { ...state, matches: [...state.matches, addMatch.match], games: [...state.games, ...addMatch.games]}
        
        case "REMOVE_MATCH":
            console.log("You're deleting a match", state, action);
            const matchesAfterDelete = state.matches.filter((match) => match.id !== action.matchId)
            return {...state, matches: matchesAfterDelete }

        default:
            return state;
    }
}