import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import wishlistReducer from './wishlistReducer';


const rootReducer = combineReducers({
    budgetReducer,
    wishlistReducer
})

export default rootReducer