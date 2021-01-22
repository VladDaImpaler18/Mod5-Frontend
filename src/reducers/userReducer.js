import { SELECT_USER, LOADING_USER } from '../constants/action-type';

//User fetch will grab all the user's (budget)entries and (wishlist)items.
const userReducer = (state = {users: [], loading: false}, action) => {
    switch(action.type){
        case LOADING_USER:
            debugger;
            return;


        case SELECT_USER:
            debugger;
            return;


        default:
            return state;
    }
}

export default userReducer;