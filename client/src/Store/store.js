import { createStore, combineReducers } from 'redux'
import categoryReducer from './Categories/CategoryReducer'
import ingredientReducer from './Ingredients/IngredientReducer'

const appReducer = combineReducers({
    category: categoryReducer,
    ingredient: ingredientReducer
})

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;