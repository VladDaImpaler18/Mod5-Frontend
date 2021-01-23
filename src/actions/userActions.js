import { LOADING_USER, SELECT_USER , ADD_USER, ADD_ENTRY, ADD_ITEM} from '../constants/action-type';

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_USER });
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(userData => {
            console.log("FetchUsers in action happened.", userData); //second dispatch goes here (ADD_ITEM)   
            dispatch({ type: ADD_USER, user: userData })
            dispatch({ type: ADD_ENTRY, user: userData.entries })
            dispatch({ type: ADD_ITEM, user: userData.items })
        })
    };
}

export const selectUser = (user) => {
    console.log("Select User!");
    return { type: SELECT_USER, user }
}

export const addUser = (user) => {
    return { type: ADD_USER, user: user }
}