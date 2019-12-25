import { createStore } from 'redux'
import Reducer from './reducers/ReducersIndex'

export function configureStore(){
   console.log("Creating store in store.js.")
   return createStore(
      Reducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
}

export const store = configureStore()
