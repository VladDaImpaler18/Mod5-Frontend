import { LOADING_LIST, ADD_ITEM, IMPORT_ITEMS, DELETE_ITEM } from '../constants/action-type.js';

export const fetchList = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_LIST });
        fetch('http://localhost:3001/wishlist_items') //will have to find the proper address here
        .then(response => response.json())
        .then(items => console.log(items)); //second dispatch goes here (ADD_ITEM)
    };
}

export const addItem = (item) => {
    return (dispatch) => {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(entry)
    };
    fetch('http://localhost:3001/wishlist_items', configObj)
    .then(response => response.json())
    .then(entry => { 
        dispatch({ type: ADD_ITEM, item })
    })
    };
}

export const deleteEntry = (itemId) => {
    return(dispatch) => {
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({id: itemId})
        };
        fetch("http://localhost:3001/wishlist_items", configObj)
        .then(response => response.json())
        .then (itemId => dispatch({ type: DELETE_ITEM, itemId }))
    }
}
export const importWishlist = (items) => {
    return { type: IMPORT_ITEMS, items }
}