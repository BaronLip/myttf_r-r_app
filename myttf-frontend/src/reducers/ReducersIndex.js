import { combineReducers } from 'redux';
import players from './PlayersReducer';
import matches from './MatchesReducer';

console.log("Combining reducers and creating state.")

export default combineReducers({
    players, matches
});

// When importing state from reducers, players and matches is being named here as they are default exports from the individual reducers.