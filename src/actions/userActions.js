import { LOADING_USER, SELECT_USER , ADD_USER, ADD_ENTRY, ADD_ITEM, IMPORT_ITEMS, IMPORT_ENTRIES} from '../constants/action-type';

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_USER });
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(userData => {
            dispatch({ type: ADD_USER, user: userData })
            dispatch({ type: ADD_ENTRY, user: userData.entries })
            dispatch({ type: ADD_ITEM, user: userData.items })
        })
    };
}

export const selectUser = (user) => {
    const userData = {id: user.id, name: user.name, email: user.email};
    const items = user.WishlistItems;
    const entries = user.BudgetItems;
    return (dispatch) =>{
        dispatch({ type: SELECT_USER, userData })
        dispatch({ type: IMPORT_ITEMS, items })
        dispatch({ type: IMPORT_ENTRIES, entries })
    } 
}

export const addUser = (user) => {
    return { type: ADD_USER, user: user }
}