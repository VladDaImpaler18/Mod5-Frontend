import { LOADING_BUDGET, ADD_ENTRY} from '../constants/action-type.js';

export const fetchList = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_BUDGET });
        fetch('http://localhost:3001') //will have to find the proper address here
        .then(response => response.json())
        .then(items => console.log(items)); //second dispatch goes here (ADD_ITEM)
    };
}