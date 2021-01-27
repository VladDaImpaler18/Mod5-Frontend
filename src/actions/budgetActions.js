import { LOADING_BUDGET, ADD_ENTRY, IMPORT_ENTRIES, DELETE_ENTRY} from '../constants/action-type.js';

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
        console.log("the server replied, entryObj to add:", entry);
        dispatch({ type: ADD_ENTRY, entry })
    })
    };
}

export const deleteEntry = (entryId) => {
    return(dispatch) => {
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(entryId)
        };
        fetch("http://localhost:3001/budget_items", configObj)
        .then(response => response.json())
        .then (entryId => {
            console.log("the server replied, ID to delete:", entryId);
            dispatch({ type: DELETE_ENTRY, entryId})
        })
    };
}

export const importBudget = (entries) => {
    return { type: IMPORT_ENTRIES, entries }
}