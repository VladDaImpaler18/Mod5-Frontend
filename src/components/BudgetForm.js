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
        description: '',
        amount: '',
        recurring: false,
        expirationDate: '',
        //user_id: '' // will be set later. 
        //wishlist_item_id: '',
        //created_at: ''
    }
    
    handleOnChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleOnSubmit = event => {
        event.preventDefault();
        let entry = {...this.state, amount: parseFloat(this.state.amount), user_id: this.props.user.id};
        
        if(this.state.recurring && entry.expirationDate.length > 0){
            let dateRegexp = /(?<month>[0-9]{2})\D(?<day>[0-9]{2})\D(?<year>[0-9]{4})/;
            // inputted as MM/DD/YYYY
            let {month, day, year} = entry.expirationDate.match(dateRegexp).groups;
            // 1999-01-08 ISO 8601; January 8 in any mode (PostgreSQL recommended format) 
            const formattedDate = `${year}-${month}-${day}`;
            entry = {...entry, expirationDate: formattedDate}
        } else {entry = {...entry, recurring: false}} //If recurring was checked, but expiration date was blank it turns recurring false
        this.props.addEntry(entry);
        this.setState({
            name: '',
            description: '',
            amount: '',
            recurring: false,
            expirationDate: '',
        })
    };

    handleOnCheckboxChange = () => {
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
                    <label>Description:</label>
                    <textarea name="description" value={this.state.description} onChange={this.handleOnChange} />
                    <br/>
                    <label>Amount:</label>
                    <input type="text" name="amount" value={this.state.amount} placeholder="Ex: -40 for a $40 expense" onChange={this.handleOnChange} />
                    <br/>
                    <Checkbox label={"Recurring"} isSelected={this.state.recurring} onCheckboxChange={this.handleOnCheckboxChange} />
                    <br/>
                    {this.state.recurring ?
                        <>
                        <label>Expiration Date:</label><input
                        type="text"
                        name="expirationDate"
                        value={this.state.expirationDate}
                        placeholder="MM/DD/YYYY"
                        onChange={this.handleOnChange}/>
                        </>
                        :
                        null }
                    <br/>
                    <br/>
                    <input type="submit" value="Add Entry" />
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        user: state.userReducer.user
    }
}


export default connect(mapStateToProps, { addEntry })(BudgetForm);