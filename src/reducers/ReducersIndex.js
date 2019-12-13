import { combineReducers } from 'redux';
import players from './PlayersReducer';
import matches from './MatchesReducer';


console.log("You're reached combinedReducers")

export default combineReducers({
    players, matches
});