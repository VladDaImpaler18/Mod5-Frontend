import { ADD_ENTRY, LOADING_BUDGET, IMPORT_ENTRIES, DELETE_ENTRY } from '../constants/action-type';
const budgetReducer = (state = { entries: [], loading: false }, action) => {
    switch(action.type) {
        case LOADING_BUDGET:
            return {
                ...state,
                entries: [...state.entries],
                loading: true
            };
        case ADD_ENTRY:  
            debugger
            return {
                ...state,
                entries: state.entries.concat(action.entry),
                loading: false
            };
        case IMPORT_ENTRIES:
            return {
                ...state,
                entries: action.entries,
                loading: false
            }
        case DELETE_ENTRY:
            return {
                ...state,
                entries: state.entries.filter(entry=>entry.id != action.entryId.id),
                loading: false
            }

        default:
            return state;
    }
}

export default budgetReducer;