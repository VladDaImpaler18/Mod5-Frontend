// this is a presentational component.
// props include entry-Object and maximized-Boolean


/* Try this later
const wantedProperties = ['description', 'expirationDate','created_at'];
const renderDetails = (entry) => {
        Object.keys(entry.entry).map(
            (key,value) => 
            wantedProperties.includes(key) && !!value ? <li><label>{key}:</label>{value}</li> : null
        );
}
*/

// const renderTitle = () => <li key={props.entry.id}>{ props.entry.name } --- { props.entry.amount }</li> 
//     const renderDetails = () => 
//         <ul>
//             <li><label>Description: </label>{props.entry.description}</li>
//             <li><label>Expires: </label>{props.entry.expirationDate}</li>
//             <li><label>Created: </label>{props.entry.created_at}</li>
//         </ul>

import React from 'react'

const BudgetEntry = props => (
    <div>
        <li key={props.entry.id}>{ props.entry.name } --- { props.entry.amount }</li>
        <ul style={props.showMore ? {display: 'block'} : {display: 'none'} }>
            <li><label>Description: </label>{props.entry.description}</li>
            <li><label>Expires: </label>{props.entry.expirationDate}</li>
            <li><label>Created: </label>{props.entry.created_at}</li>
        </ul>
    </div>
)
export default BudgetEntry;