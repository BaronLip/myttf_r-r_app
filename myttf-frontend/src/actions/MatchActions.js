export const fetchMatches = () => {
    console.log("actions/MatchActions.js fetchMatches");

    return (dispatch) => {
        dispatch({ type: "FETCH_MATCHES" });

        fetch("http://localhost:3000/api/v1/matches")
            .then(response => response.json())
            // .then(matches => console.log(matches))
            .then(matches => matches.forEach(match => dispatch(addMatch(match))))
            .catch(error => console.log(error))
    };
}



// match arg is equal to {...this.state} from MatchesFrom at submission.
export const addMatch = (match) => {
    console.log("actions/MatchActions.js addMatch", match);
    return { type: "ADD_MATCH", match };
}

export const removeMatch = (matchId) => {
    console.log("actions/MatchActions.js removeMatch", matchId);
    return { type: "REMOVE_MATCH", matchId }
}

export const bookmark = (value) => {
    console.log("You're bookmarking this match.", value);
    return { type: "BOOKMARK", value }
}