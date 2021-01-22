import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import wishlistReducer from './wishlistReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    budgetReducer,//or do budgets: budgetReducer,
    wishlistReducer, //or do wishlists: wishlistReducer
    userReducer
})


export default rootReducer