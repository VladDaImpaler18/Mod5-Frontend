//This is for development purposes. Container to allow selection of 3 seed users.
//handleOnClick sets state to selected user.

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectUser } from '../actions/userActions';

class UserCard extends Component {
    
    handleOnClick = () => {
        console.log("Handle on click done, user:", this.props.user.name)
        this.props.selectUser(this.props.user)
    }
    
    render() {
        return (
            <div onClick={this.handleOnClick}>
                {this.props.user.id == this.props.loggedInID ?
                <span style={{color: "green"}}>{this.props.user.name}</span>
                :
                <span>{this.props.user.name}</span>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loggedInID: state.userReducer.user.id
    }
}
export default connect( mapStateToProps, {selectUser})(UserCard);