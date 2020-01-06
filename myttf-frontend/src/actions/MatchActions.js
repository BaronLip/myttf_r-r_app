export const fetchMatches = (player) => {
    console.log("actions/MatchActions.js fetchMatches");

    return (dispatch) => {
        debugger
        fetch(`http://localhost:3000/api/v1/players/${player.id}/matches`)
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

export const createMatch = (match, player) => {
    console.log("Creating a new match.", match, player);
    // Post  the fetch to the server...
    return (dispatch) => 
    fetch(`http://localhost:3000/api/v1/players/${player.id}/matches`, {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify(match)
        })
    .then(response => {
        if (response.ok) {
            return response.json()}
        else {
            throw new Error(`${response.statusText}`)
        }
        // // Needs experimental syntax plugin in order to throw expression.
        // if (!response.ok) {
        //     response.text().then(text => throw Error(text))
        // }
        // else {
        //     return response.json();
        // }
    })
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

export const deleteMatch = (match) => {
    console.log("actions/MatchActions.js deleteMatch", match);
    return dispatch =>
    fetch(`http://localhost:3000/api/v1/players/${match.player_id}/matches/${match.id}`, {
        method: "DELETE"
    }).then(() => {
        dispatch(removeMatch(match.id));
    });
}

export const removeMatch = (matchId) => {
    console.log("actions/MatchActions.js removeMatch", matchId);
    return { type: "REMOVE_MATCH", matchId } 
}

export const bookmark = (match) => {
    console.log("You're bookmarking this match.", match);
    // debugger
    let newMatch = {...match}
    if (match.bookmarked === null || match.bookmarked === false) {
        newMatch.bookmarked = true;
    } else {
        newMatch.bookmarked = false;
    }

    return dispatch =>
    fetch(`http://localhost:3000/api/v1/players/${match.player_id}/matches/${match.id}`, { 
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
    return dispatch =>
    fetch(`http://localhost:3000/api/v1/matches/${match.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(match)})
    // Without throwing any errors.
    // .then(() => { dispatch(editMatch(match));
    // })
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
    
            throw new Error(`${response.statusText} make sure to fill in all the blanks.`)
        }
    })
    .then(match => { dispatch(editMatch(match)) })
    .catch(error => alert(error));
}

export const editMatch = (match) => {
    console.log("You're editing this match.", match);
    return { type: "EDIT_MATCH", match }
}
