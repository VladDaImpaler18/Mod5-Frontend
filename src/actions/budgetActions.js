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
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(entry)
    };
    fetch("http://localhost:3001/budget_items/create", configObj)
    .then(response => response.json())
    .then(item => console.log("POST called in addEntry action", item)) //this should return an item? With an UUID i think.
    return { type: ADD_ENTRY, entry }; //entry:entry
}

export const importBudget = (entries) => {
    return { type: IMPORT_ENTRIES, entries }
}