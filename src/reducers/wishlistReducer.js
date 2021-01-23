import { IMPORT_ITEMS, LOADING_LIST, ADD_ITEM } from '../constants/action-type';

const wishlistReducer = (state = { items: [], loading: false }, action) => {
    switch(action.type) {
        case LOADING_LIST:
            return {
                ...state,
                items: [...state.items],
                loading: true
            };
        case ADD_ITEM:
            return {
                ...state,
                items: action.items,
                loading: false
            };
        
        case IMPORT_ITEMS:
            debugger;
            return {
                ...state,
                items: action.items,
                loading: false
            }

        default:
            return state;
    }
}

export default wishlistReducer;