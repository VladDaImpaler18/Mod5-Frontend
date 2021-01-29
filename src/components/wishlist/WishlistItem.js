/*
name: '',
description: '',
price: '',
url: '',
priority: '',
*/

import React from 'react'

const WishlistItem = props => (
    <div>
        <li key={props.item.id}> {props.item.name} --- ${props.item.price}</li>
        { props.expanded ? 
        <ul>
            <li> Image carousel goes here</li>
            <li><label>Description: </label>{props.item.description}</li>
            <li><label>URL: </label>{props.item.url}</li>
            <li><label>Added: </label>{props.item.created_at.split("T")[0]}</li>
        </ul>
        : null
        }

    </div>
)
export default WishlistItem;