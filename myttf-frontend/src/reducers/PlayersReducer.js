console.log("reducers/PlayersReducer.js")
// Sets an initial state for a Player and will be overwritten by fetch within Dashboard.js
// The initial state needs to match the format of the returned state.
// This may need to change based fetch call.
export default (state = 
    {
        "player": {
            "username": "",
            "profileImage": "",
            "wins": 0,
            "losses": 0,
        },
        "matches": []
    }
    , action) => {
    
    switch (action.type) {
    
    //***** PLAYER REDUCERS: *****
        case "FETCH_PLAYER":
            console.log("You're fetching a player", state, action);
            // debugger
            return [...state, action.player];

        case "SHOW_PLAYER":
            console.log("You're showing a player", state, action);
            return { ...state, ...action.player };


    //***** MATCH REDUCERS: *****
        case "BOOKMARK_MATCH":
            console.log("You're bookmarking a match", state, action);

            let bookmarkedMatch = state.matches.find(match => match.id === action.match.id)
            let index = state.matches.indexOf(bookmarkedMatch)
            let newMatch = {...bookmarkedMatch, bookmarked: !bookmarkedMatch.bookmarked }

            return { ...state, matches: [...state.matches.slice(0, index), newMatch, ...state.matches.slice(index + 1)]}
        
        case "ADD_MATCH":
            console.log("You're adding a match", state, action);
            const addMatch = { ...action.match };

            if (action.match.match.win === true) { 
                state.player.wins += 1 
            } else if (action.match.match.loss === true) { 
                state.player.losses += 1 
            }

            return { ...state, matches: [...state.matches, addMatch.match], games: [...state.games, ...addMatch.games]}

        case "EDIT_MATCH":
            console.log("MatchesReducer, EDIT_MATCH", state, action);
            let copyOfPlayer = state.player
            let updatedMatch = action.match.match
            let editMatch = state.matches.find(match => match.id === updatedMatch.id)
            let matchIndex = state.matches.indexOf(editMatch)

            if (updatedMatch.win === true && editMatch.win === null) {
                copyOfPlayer.wins += 1;
                copyOfPlayer.losses -= 1;
                Object.assign(editMatch, updatedMatch);
            } else if (updatedMatch.win === null && editMatch.win === true) {
                copyOfPlayer.wins -= 1;
                copyOfPlayer.losses += 1;
                Object.assign(editMatch, updatedMatch);
            }
            
            let updatedGames = action.match.games
            let currentGames = state.games
            
            updatedGames.forEach((game) => {
                let matchingGame;
                matchingGame = currentGames.filter(currentGame => currentGame.id === game.id);
                matchingGame[0].player_score = game.player_score;
                matchingGame[0].opponent_score = game.opponent_score;
            })
            
            return {...state, 
                player: {...copyOfPlayer},
                matches: [...state.matches.slice(0, matchIndex), editMatch, ...state.matches.slice(matchIndex + 1)],
                games: [...currentGames]
            }
        
        case "REMOVE_MATCH":
            console.log("You're deleting a match", state, action);
            let playerCopy = state.player
            let matchDeleted = state.matches.find((match) => match.id === action.matchId)
            
            if (matchDeleted.win === true) {
                playerCopy.wins -= 1
            } else {
                playerCopy.losses -= 1
            }

            const matchesAfterDelete = state.matches.filter((match) => match.id !== action.matchId)
            return {...state, player: playerCopy, matches: matchesAfterDelete }

        default:
            return state;
    }
}