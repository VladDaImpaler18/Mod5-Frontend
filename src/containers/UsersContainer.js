// This container holds a list of all the users. Lists out <UserCard /> which are clickable,
// that onClick handle selectuser(event)

import React, { Component } from 'react'
import UserCard from './UserCard';

class UsersContainer extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(userData => {
            //pulls the seed users from API and creates local state of user list for demonstration purposes.
            this.setState({
                users: userData
            })
            })
        
    }
    
    listUsers = () => {
            if(this.state.users.length > 0) {return (this.state.users.map( user => <UserCard key={user.id} user={user}></UserCard>))}
            else {return "Loading users"}
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