import { ADD_ENTRY, LOADING_BUDGET, IMPORT_ENTRIES } from '../constants/action-type';
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
        case IMPORT_ENTRIES:
            debugger    
            return {
                ...state,
                entries: action.entries,
                loading: false
            }

        default:
            return state;
    }
}

export default budgetReducer;