export const fetchMatches = () => {
    console.log("actions/MatchActions.js fetchMatches");

    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/matches")
            .then(response => response.json())
            // .then(matches => console.log(matches))
            .then(matches => dispatch(setMatches(matches)))
            .catch(error => console.log(error))
    };
}

export const setMatches = (matches) => {
    return {type: "FETCH_MATCHES", matches}
}

export const showMatch = (match) => {
    console.log("actions/MatchActions.js showMatch", match);
    return { type: "SHOW_MATCH", match };
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
    .catch(error => alert(error));
}

// match arg is equal to {...this.state} from MatchesForm at submission.
export const addMatch = (match) => {
    console.log("actions/MatchActions.js addMatch", match);
    return { type: "ADD_MATCH", match };
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
    let newMatch = {...match}
    if (match.bookmarked === null || match.bookmarked === false) {
        newMatch.bookmarked = true;
    } else {
        newMatch.bookmarked = false;
    }

    return dispatch =>
    fetch(`http://localhost:3000/api/v1/matches/${match.id}`, { 
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({match: newMatch}) 
    })
    .then(() => {
        dispatch(bookmarkMatch(newMatch));
    });
}

export const bookmarkMatch = (match) => {
    return { type: "BOOKMARK_MATCH", match }
}

export const fetchMatch = (matchId) => {
    console.log("actions/MatchActions.js fetchMatch", matchId);

    fetch(`http://localhost:3000/api/v1/match/${matchId}`)
    .then(response => response.json())
    .then(match => console.log(match))
    // .then(match => match)
    .catch(error => console.log(error))
}

export const patchMatch = (match) => {
    console.log("You're patching this match.", match);
    // debugger
    return dispatch =>
    fetch(`http://localhost:3000/api/v1/matches/${match.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(match)
    })
    .then(() => {
        dispatch(editMatch(match));
    });
}

export const editMatch = (match) => {
    console.log("You're editing this match.", match);
    return { type: "EDIT_MATCH", match }
}