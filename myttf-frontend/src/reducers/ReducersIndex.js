import { combineReducers } from 'redux';
import player from './PlayersReducer';
// import matches from './MatchesReducer';

console.log("Combining reducers and creating state.")

export default combineReducers({
    player
});

// When importing state from reducers, players and matches is being named here, in the import statement, as they are default exports from the individual reducers.