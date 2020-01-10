export default (state = {}, action) => {

    switch (action.type) {
        // NO LONGER NEED TO FETCH MATCHES BECAUSE MATCHES ARE ASSOCIATED WITH PLAYER AND RETURNED WITH FETCHING PLAYER.
        // case "FETCH_MATCHES":
        //     console.log("you're fetching all matches", state, action);
        //     return [...action.matches];
        
        case "SHOW_MATCH":
            console.log("You're showing the match", state, action);
            const match = {
                ...action.match
            };
            return [...state, match ];
        
        // MOVED TO PLAYER REDUCER
        // case "ADD_MATCH":
        
        // MOVED TO PLAYER REDUCER
        // case "REMOVE_MATCH":
            
        case "EDIT_MATCH":
            console.log("MatchesReducer, EDIT_MATCH", state, action);
            // debugger
            return { ...action.match }
            
        default:
            return state;
    }
}