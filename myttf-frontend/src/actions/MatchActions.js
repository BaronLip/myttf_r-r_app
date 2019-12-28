export const fetchMatches = () => {
    console.log("actions/MatchActions.js fetchMatches");

    return (dispatch) => {
        dispatch({ type: "FETCH_MATCHES" });

        fetch("http://localhost:3000/api/v1/matches")
            .then(response => response.json())
            // .then(matches => console.log(matches))
            .then(matches => matches.forEach(match => dispatch(showMatch(match))))
            .catch(error => console.log(error))
    };
}

export const showMatch = (match) => {
    console.log("actions/MatchActions.js showMatch", match);
    return { type: "SHOW_MATCH", match };
}

// match arg is equal to {...this.state} from MatchesFrom at submission.
export const addMatch = (match) => {
    console.log("actions/MatchActions.js addMatch", match);
    return { type: "ADD_MATCH", match };
}

export const createMatch = (match) => {
    console.log("Creating a new match.", match);
    // Post  the fetch to the server...
    return (dispatch) => 
        fetch('http://localhost:3000/api/v1/matches', {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(match)
            })
        .then(response => response.json())
        // ...reflect the added match to the window...
        .then(match => { dispatch( addMatch(match) )})
        // ...or show an error.
        .catch(error => console.log(error));
}

export const deleteMatch = (matchId) => {
    console.log("actions/MatchActions.js deleteMatch", matchId);
    return dispatch =>
    fetch(`http://localhost:3000/api/v1/matches/${matchId}`, {
        method: "DELETE"
    }).then(() => {
        dispatch(removeMatch(matchId));
    });
}

export const removeMatch = (matchId) => {
    console.log("actions/MatchActions.js removeMatch", matchId);
    return { type: "REMOVE_MATCH", matchId } 
}

export const bookmark = (match) => {
    console.log("You're bookmarking this match.", match);
    return dispatch =>
    fetch(`http://localhost:3000/api/v1/matches/${match}`, {
        method: "PUT"
    }).then(() => {
        dispatch(bookmarkMatch(match));
    });
}

export const bookmarkMatch = (match) => {
    return { type: "BOOKMARK_MATCH", match }
}