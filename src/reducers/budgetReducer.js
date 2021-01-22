import { ADD_ENTRY, LOADING_BUDGET } from '../constants/action-type';
const budgetReducer = (state = { entries: [], loading: false }, action) => {
    switch(action.type) {
        case LOADING_BUDGET:
            return {
                ...state,
                entries: [...state.entries],
                loading: true
            };
        case ADD_ENTRY:  
        return {
                ...state,
                entries: action.entry,
                loading: false
            };
        
        default:
            return state;
    }
}

export default budgetReducer;