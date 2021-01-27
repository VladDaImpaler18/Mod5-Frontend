// this is a presentational component.
// props include entry-Object and maximized-Boolean

import React from 'react'

const BudgetEntry = props => (
    <div>
        <li key={props.entry.id}>{ props.entry.name } --- { props.entry.amount }</li>
        {props.expanded ? 
        <ul>
            <li><label>Description: </label>{props.entry.description}</li>
            <li><label>Expires: </label>{props.entry.expirationDate}</li>
            <li><label>Created: </label>{props.entry.created_at}</li>
        </ul>
        : null
        }
    </div>
)
export default BudgetEntry;