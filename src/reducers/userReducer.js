import { SELECT_USER, LOADING_USER, ADD_USER, IMPORT_ENTRIES } from '../constants/action-type';

//User fetch will grab all the user's (budget)entries and (wishlist)items.
const userReducer = (state = {user: {}, loading: false}, action) => {
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
                user: {id: action.user.id, name: action.user.name, email: action.user.email},
                loading: false
            };

        case ADD_USER:
            debugger;
            return {
                ...state,
                user: state.user.concat(action.user),
                loading: false
            }
            


        default:
            return state;
    }
}

export default userReducer;