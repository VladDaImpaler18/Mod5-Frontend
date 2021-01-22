import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addEntry } from '../actions/budgetActions'
//budget_items( 
//    id: uuid, name: text, amount:money, reccuring:boolean
//    expirationDate:DATE
//    user_id: uuid, wishlist_item_id: uuid, created_at: datetime
//    )
class budgetForm extends Component {
    state = {
        text: ''
    }
    
    handleOnChange = event => {
        debugger;
        // this.setState({

        // })
    };

    handleOnSubmit = event => {
        event.preventDefault();
        debugger;
    };
    render() {
        return (
            <div>
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <label>Name:</label>
                    <input type="text" onChange={(event) => this.handleOnChange(event)} />



                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addEntry })(budgetForm);