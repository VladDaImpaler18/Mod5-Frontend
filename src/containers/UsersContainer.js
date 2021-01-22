// This container holds a list of all the users. Lists out <UserCard /> which are clickable, that onClick handle selectuser(event)
import React, { Component } from 'react'
import UserCard from './UserCard';



class UsersContainer extends Component {
    state = {
        users: []
    }

    componentDidMount() {
    console.log("props in DidMount", this.props)
    fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(userData => {
            console.log("FetchUsers happened.", userData);
            })
    }
    
    listUsers = () => {
            if(this.state.users.length > 0) {return (this.state.users.map( user => <UserCard user={user}></UserCard>))}
            else {return "No Users? I dunno..."}
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