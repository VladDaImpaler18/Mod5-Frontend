import { LOADING_USER, SELECT_USER , IMPORT_ENTRIES, IMPORT_ITEMS} from '../constants/action-type';

export const fetchList = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_USER });
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(userData => {
            console.log("Fetchlist happened.", userData); //second dispatch goes here (ADD_ITEM)   
            dispatch({ type: SELECT_USER, user: userData.user })
            dispatch({ type: IMPORT_ENTRIES, user: userData.entries })
            dispatch({ type: IMPORT_ITEMS, user: userData.items })
        }
    };
}