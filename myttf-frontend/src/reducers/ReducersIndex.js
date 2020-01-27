import { combineReducers } from 'redux';
import player from './PlayersReducer';
import matches from './MatchesReducer';
import current_player from "./CurrentPlayerReducer";
import login_form from "./LoginForm";

console.log("Combining reducers and creating store/state.")

export default combineReducers({
    player, matches, current_player, login_form
});

// Longhand syntax:
// export default combineReducer({
//     player: player,
//     matches: matches,
//     current_player: current_player
// })

// store.js imports this file and creates the store.

// When importing state from reducers, "players" and "matches" is being named here in the import statement, as they are default exports from the individual reducers.

// ? When dispatching an action, dispatch will look for the the correct action.type in any/all of the reducer files. As long as they are combined here. But it is in the reducer that determines what state you'll be using.