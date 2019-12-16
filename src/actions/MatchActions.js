// match arg is equal to {...this.state} from MatchesFrom at submission.
export const addMatch = (match) => {
    console.log("actions/MatchActions.js addMatch", match);
    return { type: "ADD_MATCH", match };
}

export const removeMatch = (matchId) => {
    console.log("actions/MatchActions.js removeMatch", matchId);
    debugger
    return { type: "REMOVE_MATCH", matchId }
}