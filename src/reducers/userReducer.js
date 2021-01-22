import { SELECT_USER, LOADING_USER, IMPORT_ENTRIES } from '../constants/action-type';

//User fetch will grab all the user's (budget)entries and (wishlist)items.
const userReducer = (state = {users: [], loading: false}, action) => {
    switch(action.type){
        case LOADING_USER:
            debugger;
            return {
                ...state,
                users: [...state.users],
                loading: true
            };


        case SELECT_USER:
            debugger;
            return {
                ...state,
                user: action.entry,
                loading: false
            };


        default:
            return state;
    }
}

export default userReducer;