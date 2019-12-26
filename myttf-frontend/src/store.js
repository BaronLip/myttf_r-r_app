import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './reducers/ReducersIndex'

export function configureStore(){
   console.log("Creating store in store.js.")

   // This is used due to passing too many "store enhancers" into the createStore function.
   const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

   return createStore(
      Reducer,
      composeEnhancer(applyMiddleware(thunk))
   );
}

export const store = configureStore()
