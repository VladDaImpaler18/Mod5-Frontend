import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import wishlistReducer from './wishlistReducer';


const rootReducer = combineReducers({
    budgetReducer,//or do budgets: budgetReducer,
    wishlistReducer//or do wishlists: wishlistReducer
})


export default rootReducer