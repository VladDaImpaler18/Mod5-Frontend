// This container holds a list of all the users. Lists out <UserCard /> which are clickable,
// that onClick handle selectuser(event)

import React, { Component } from 'react'
import UserCard from './UserCard';

class UsersContainer extends Component {
    state = {
        users: [],
        loading: false
    }

    componentDidMount() {
        fetch('http://localhost:3001/users')
        .then(response => {
            this.setState({ ...this.state, loading: true })
            return response.json()
        })
        .then(userData => {
            //pulls the seed users from API and creates local state of user list for demonstration purposes.
            this.setState({
                users: userData,
                loading: false
            })
            })
        
    }
    
    listUsers = () => {
            if(this.state.loading) {return (this.state.users.map( user => <UserCard key={user.id} user={user}></UserCard>))}
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