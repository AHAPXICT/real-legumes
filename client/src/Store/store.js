import { createStore, combineReducers } from 'redux'
import categoryReducer from './Categories/CategoryReducer'
import ingredientReducer from './Ingredients/IngredientReducer'
import productReducer from './Products/ProductReducer'

const appReducer = combineReducers({
    category: categoryReducer,
    ingredient: ingredientReducer,
    product: productReducer
})

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;