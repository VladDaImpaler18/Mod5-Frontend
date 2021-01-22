import { LOADING_LIST, ADD_ITEM, IMPORT_ITEMS } from '../constants/action-type.js';

export const fetchList = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_LIST });
        fetch('http://localhost:3001/wishlist_items') //will have to find the proper address here
        .then(response => response.json())
        .then(items => console.log(items)); //second dispatch goes here (ADD_ITEM)
    };
}

export const addItem = (item) => {
    return { type: ADD_ITEM, item }
}

export const importWishlist = (items) => {
    return { type: IMPORT_ITEMS, items }
}