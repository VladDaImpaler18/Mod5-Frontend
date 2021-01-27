// this is a presentational component.
// props include entry-Object and maximized-Boolean

import React from 'react'

const BudgetEntry = props => (
    <div>
        <li className={props.entry.name} key={props.entry.id}>{ props.entry.name } --- ${ props.entry.amount } {props.entry.amount > 0 ? "credit" : "debt" }</li>
        {props.expanded ? 
        <ul>
            <li><label>Description: </label>{props.entry.description}</li>
            <li style={!!props.entry.expirationDate ? {display: 'block'} : {display: 'none'}} ><label>Expires: </label>{props.entry.expirationDate}</li>
            <li><label>Created: </label>{props.entry.created_at.split("T")[0]}</li>
        </ul>
        : null
        }
    </div>
)
export default BudgetEntry;