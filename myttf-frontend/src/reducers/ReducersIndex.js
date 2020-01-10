import { combineReducers } from 'redux';
import player from './PlayersReducer';
import matches from './MatchesReducer';

console.log("Combining reducers and creating state.")

export default combineReducers({
    player, matches
});

// When importing state from reducers, "players" and "matches" is being named here in the import statement, as they are default exports from the individual reducers.

// ? When dispatching an action, dispatch will look for the the correct action.type in any/all of the reducer files. As long as they are combined here. But it is in the reducer that determines what state you'll be using. 