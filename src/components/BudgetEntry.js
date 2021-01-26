// this is a presentational component. has onClick feature which will show all the details,
// or only sum it up
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


const renderDetails = (entry) => {
    <>
        <li><label>Description: </label>{entry.description}</li>
        <li><label>Expires: </label>{entry.expirationDate}</li>
        <li><label>Created: </label>{entry.created_at}</li>
    </>
}

const BudgetEntries = (props) => {
    const title = () => <li key={props.entry.id}>{ props.entry.name } --- { props.entry.amount }</li> 
    const details = () => 
        <ul>
            { renderDetails(props.entry) }
        </ul>
    
    return (
        <div>
            {title}
            {details}
        </div>
    )
}

export default BudgetEntries;