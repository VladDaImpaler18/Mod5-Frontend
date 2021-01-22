//This is for development purposes. Container to allow selection of 3 seed users.
//handleOnClick sets state to selected user.

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectUser } from '../actions/userActions';

class UserCard extends Component {
    
    handleOnClick = event => {
        debugger;
        this.props.selectUser(event.id)
    }
    
    render() {
        return (
            <div key={this.props.user.id} onClick={this.handleOnClick}>
                {this.props.user.name}
            </div>
        )
    }
}

export default connect( null, {selectUser})(UserCard);