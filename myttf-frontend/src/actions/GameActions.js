export const createGame = (game, player, match) => {
    console.log("GameActions createGame", game, player, match);
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/players/${player.id}/matches/${match.id}/games`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        })
        .then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error(`${response.statusText}`)
        }
        })
        .then(game => { dispatch(addGame(game)) })
        .catch(error => alert(error));
    }
}

export const addGame = (game) => {
    return { type: "ADD_GAME", game };
}