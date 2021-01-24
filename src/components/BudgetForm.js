import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addEntry } from '../actions/budgetActions'
import Checkbox from './Checkbox'

//budget_items( 
//    id: uuid, name: text, amount:money, reccuring:boolean
//    expirationDate:DATE
//    user_id: uuid, wishlist_item_id: uuid, created_at: datetime
//    )
class BudgetForm extends Component {
    state = {
        name: '',
        amount: '',
        recurring: false,
        expirationDate: '',
        //user_id will be set later. 
        //wishlist_item_id: '',
    }
    
    handleOnChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleOnSubmit = event => {
        event.preventDefault();
        const entry = {...this.state};
        this.props.addEntry(entry);
        this.setState({
            name: '',
            amount: '',
            recurring: false,
            expirationDate: '',
        })
    };

    handleOnCheckboxChange = event => {
        this.setState({
            ...this.state,
            recurring: !this.state.recurring
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                    <br/>
                    <label>Amount:</label>
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleOnChange} />
                    <br/>
                    <Checkbox label={"Recurring"} isSelected={this.state.recurring} onCheckboxChange={this.handleOnCheckboxChange} />
                    <br/>
                    {this.state.recurring ?
                    <input
                        type="text"
                        name="expirationDate"
                        value={this.state.expirationDate}
                        placeholder="MM/DD/YYYY"
                        onChange={this.handleOnChange}/>
                        :
                        null }
                    <br/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addEntry })(BudgetForm);