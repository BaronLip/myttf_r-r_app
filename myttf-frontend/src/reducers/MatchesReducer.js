export default (state = {}, action) => {

    switch (action.type) {
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
            debugger
            return [...state, action.match.match]
            
        default:
            return state;
    }
}