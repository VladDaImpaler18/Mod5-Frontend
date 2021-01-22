// This container holds a list of all the users. Lists out <UserCard /> which are clickable, that onClick handle selectuser(event)
import React, { Component } from 'react'
import UserCard from './UserCard';


class UsersContainer extends Component {
    listUsers = () => {
        return this.props.users.map( user => <UserCard user={user}></UserCard>)
    }
    render() {
        return (
            <div>
                {this.listUsers()}
            </div>
        )
    }
}

export default UsersContainer;