//wishlist_items(
//    id: uuid, name: text, description:text, price:money, url:text,
//    priority:integer, user_id:uuid, created_at:datetime
//    )

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addItem } from '../actions/wishlistActions';


class WishlistForm extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, { addItem })(WishlistForm);