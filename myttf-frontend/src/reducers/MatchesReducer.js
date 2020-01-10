// import uuid from 'uuid';

export default (state = [], action) => {

    switch (action.type) {
        case "FETCH_MATCHES":
            console.log("you're fetching all matches", state, action);
            return [...action.matches];
        
        case "SHOW_MATCH":
            console.log("You're showing the match", state, action);
            const match = {
                id: uuid(),
                ...action.match
            };
            return [...state, match ];

        case "ADD_MATCH":
            debugger
            console.log("You're adding a match", state, action);
            const newMatch = {
                // id: uuid(),
                ...action.match
            };

            return [...state, newMatch ];

        case "REMOVE_MATCH":
            console.log("You're deleting a match", state, action);
            debugger
            return state.filter((match) => match.id !== action.matchId)
            
        
            // // This line also works but also does not re-render. 
            // return { ...state, ...action.match }

        case "EDIT_MATCH":
            console.log("MatchesReducer, EDIT_MATCH", state, action);
            debugger
            return [...state, action.match]
            
        default:
            return state;
    }
}