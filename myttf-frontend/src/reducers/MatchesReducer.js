import uuid from 'uuid';

console.log("reducers/MatchesReducer.js")

export default (state = [], action) => {

    switch (action.type) {
        case "FETCH_MATCHES":
            console.log("you're fetching all matches", state, action);
            // debugger
            return [...state];
        
        case "ADD_MATCH":
            console.log("You're adding a match", state, action);
            const match = {
                id: uuid(),
                ...action.match
            };
            // debugger;
            return [...state, match ];

        case "REMOVE_MATCH":
            console.log("You're removing a match", state, action);
            // debugger;
            return state.filter((match) => match.id !== action.matchId)

        case "BOOKMARK":
            console.log("You're bookmarking a match", state, action)
            return { ...state, value: action.value }

        default:
            return state;
    }
}