import uuid from 'uuid';

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
            console.log("You're adding a match", state, action);
            const newMatch = {
                id: uuid(),
                ...action.match
            };
            return [...state, newMatch ];

        case "REMOVE_MATCH":
            console.log("You're deleting a match", state, action);
            return state.filter((match) => match.id !== action.matchId)
            
        case "BOOKMARK_MATCH":
            console.log("You're bookmarking a match", state, action);
            let bookmarkedMatch = state.find(match => match.id === action.match.id)
            let index = state.indexOf(bookmarkedMatch)

            return [ 
                ...state.slice(0,index), action.match, ...state.slice(index + 1)
            ]

        case "EDIT_MATCH":
            console.log("You're editing this match.", state, action);
            // debugger
            let matchToEdit = state.find(match => match.id === action.match.id)
            let indexOfMatchToEdit = state.indexOf(indexOfMatchToEdit)
            return [
                [...state, action.match]
            ]

        default:
            return state;
    }
}