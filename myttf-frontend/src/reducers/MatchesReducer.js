import uuid from 'uuid';

export default (state = [], action) => {

    switch (action.type) {
        case "FETCH_MATCHES":
            console.log("you're fetching all matches", state, action);
            return [...state];
        
        case "SHOW_MATCH":
            console.log("You're showing the match", state, action);
            const match = {
                id: uuid(),
                ...action.match
            };
            return [...state, match ];

        case "ADD_MATCH":
            console.log("You're showing the match", state, action);
            const newMatch = {
                id: uuid(),
                ...action.match
            };
            return [...state, newMatch ];

        case "REMOVE_MATCH":
            console.log("You're deleting a match", state, action);
            return state.filter((match) => match.id !== action.matchId)
            
        case "BOOKMARK_MATCH":
            console.log("You're bookmarking a match", state, action)
            const bookmarkedMatch = action.match
            if (bookmarkedMatch.bookmarked === null || bookmarkedMatch.bookmarked === false) {
                bookmarkedMatch.bookmarked = true;
            } else {
                bookmarkedMatch.bookmarked = false;
            }
            return [ ...state ]

        default:
            return state;
    }
}