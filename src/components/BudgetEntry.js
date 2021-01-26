// this is a presentational component.
// props include entry-Object and maximized-Boolean
import React from 'react'

/* Try this later
const wantedProperties = ['description', 'expirationDate','created_at'];
const renderDetails = (entry) => {
        Object.keys(entry.entry).map(
            (key,value) => 
            wantedProperties.includes(key) && !!value ? <li><label>{key}:</label>{value}</li> : null
        );
}
*/


const BudgetEntries = (props) => {
    const renderTitle = () => <li key={props.entry.id}>{ props.entry.name } --- { props.entry.amount }</li> 
    const renderDetails = () => 
        <ul>
            <li><label>Description: </label>{props.entry.description}</li>
            <li><label>Expires: </label>{props.entry.expirationDate}</li>
            <li><label>Created: </label>{props.entry.created_at}</li>
        </ul>
    
    return (
        <div>
            {renderTitle}
            {this.props.maximized ? renderDetails : null}
            
        </div>
    )
}

export default BudgetEntries;