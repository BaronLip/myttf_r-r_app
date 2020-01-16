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
            return { ...state, ...action.player }


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
            // debugger
            if (action.match.match.win === true) { 
                state.player.wins += 1 
            } else if (action.match.match.loss === true) { 
                state.player.losses += 1 
            }

            return { ...state, matches: [...state.matches, addMatch.match], games: [...state.games, ...addMatch.games]}

        
        case "EDIT_MATCH":
            console.log("MatchesReducer, EDIT_MATCH", state, action);
            // debugger
            if (action.match.match.win === true) {
                // state.player.wins += 1;
                // state.player.losses -= 1;
            } else if (action.match.match.win === null) {
                state.player.wins -= 1;
                state.player.losses += 1;
            }
            
            let editedMatch = state.matches.find(match => match.id === action.match.match.id)
            let matchIndex = state.matches.indexOf(editedMatch)
            
            let updatedGames = action.match.games
            let currentGames = state.games

            currentGames.forEach((game) => {
                let matchingGame = updatedGames.filter(updatedGame => updatedGame.id === game.id);
                game.player_score = matchingGame.player_score;
                game.opponent_score = matchingGame.opponent_score;
            })
            // updatedGames = updatedGames.map(game => {
            //     let updatedStateGames = currentGames.find(currentGame => currentGame.id === game.id);
            //     return updatedStateGames ? [...game, updatedStateGames] : game;
            // })

            // let gameIds = []
            // action.match.games.forEach(game => gameIds.push(game.id))

            // gameIds.forEach(id => state.games.find(game => game.id === id))
            // debugger
            return {
                ...state, player: {...state.player},
                matches: [...state.matches.slice(0, matchIndex), editedMatch, ...state.matches.slice(matchIndex + 1)],
                games: [...currentGames]}

        
        
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