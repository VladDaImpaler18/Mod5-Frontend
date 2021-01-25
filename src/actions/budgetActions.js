import { LOADING_BUDGET, ADD_ENTRY, IMPORT_ENTRIES} from '../constants/action-type.js';

export const fetchList = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_BUDGET });
        fetch('http://localhost:3001/budget_items') //will have to find the proper address here
        .then(response => response.json())
        .then(entries => console.log("Fetchlist happened.", entries)); //second dispatch goes here (ADD_ITEM)
    };
}

export const addEntry = (entry) => {
    return(dispatch) => {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(entry)
    };
    fetch("http://localhost:3001/budget_items", configObj)
    .then(response => response.json())
    .then(entry => { 
        console.log("the server replied:", entry);
        dispatch({ type: ADD_ENTRY, entry })
    })
    };
}

export const importBudget = (entries) => {
    return { type: IMPORT_ENTRIES, entries }
}