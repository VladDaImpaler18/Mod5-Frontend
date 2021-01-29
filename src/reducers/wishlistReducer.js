import { IMPORT_ITEMS, LOADING_LIST, ADD_ITEM, DELETE_ITEM } from '../constants/action-type';

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
                items: state.items.concat(action.items),
                loading: false
            };
        
        case IMPORT_ITEMS:
            return {
                ...state,
                items: action.items,
                loading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.itemId.id),
            }
        default:
            return state;
    }
}

export default wishlistReducer;