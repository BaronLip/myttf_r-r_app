// match arg is equal to {...this.state} from MatchesFrom at submission.
export const addMatch = (match) => {
    console.log("actions/MatchActions.js", match);
    return { type: "ADD_MATCH", match };
}

export const removeMatch = (match) => {
    console.log("actions/MatchActions.js", match);
    // debugger
    return { type: "REMOVE_MATCH", match }
}