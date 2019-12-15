export default (state = [], action) => {

    console.log("reducers/MatchesReducer.js")

    switch (action.type) {
        case "ADD_MATCH":
            console.log("You're adding a match", state, action);
            return [...state, action.match];
            
            case "REMOVE_MATCH":
            console.log("You're removing a match", state, action)
            // debugger;
            return state.filter(match => match.id !== action.matchId)

        case "STAR_MATCH":
            console.log("You're staring a match", state, action)
            return

        default:
            return state;
    }
}