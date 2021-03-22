import { createStore, combineReducers } from 'redux';
import categoryReducer from './Categories/CategoryReducer'

const appReducer = combineReducers({
    category: categoryReducer,
})

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;