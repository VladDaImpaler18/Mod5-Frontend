import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addItem } from '../actions/wishlistActions';

//wishlist_items(
//    id: uuid, name: text, description:text, price:money, url:text,
//    priority:integer, user_id:uuid, created_at:datetime
//    )
class WishlistForm extends Component {
    state = {
        name: '',
        description: '',
        price: '',
        url: '',
        priority: '',
    }
    handleOnChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleOnSubmit = event => {
        event.preventDefault();
        const item = {...this.state};
        this.props.addItem(item);
        this.setState({
            name: '',
            description: '',
            price: '',
            url: '',
            priority: '',
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                    <br/>
                    <label>description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} />
                    <br/>
                    <label>price:</label>
                    <input type="text" name="price" value={this.state.price} onChange={this.handleOnChange} />
                    <br/>
                    <label>url:</label>
                    <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} />
                    <br/>
                    <label>priority:</label>
                    <input type="text" name="priority" value={this.state.priority} onChange={this.handleOnChange} />
                    <br/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addItem })(WishlistForm);