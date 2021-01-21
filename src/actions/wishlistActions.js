import { LOADING_LIST, ADD_ITEM } from '../constants/action-type.js';

export const fetchList = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_LIST });
        fetch('http://localhost:3001')
        .then(response => response.json())
        .then(items => console.log(items)); //second dispatch goes here (ADD_ITEM)
    };
}

