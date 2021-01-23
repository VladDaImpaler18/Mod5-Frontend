// This container holds a list of all the users. Lists out <UserCard /> which are clickable, that onClick handle selectuser(event)
import React, { Component } from 'react'
import { LOADING_USER, ADD_USER, ADD_ENTRY, ADD_ITEM,  } from '../constants/action-type';
import UserCard from './UserCard';



class UsersContainer extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        console.log("componentDidMount")
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(userData => {
            console.log("componentDidMount happened.", userData);
            this.setState({
                users: userData
            })
            console.log("now the state is", this.state)
            //do action commands here.
            //dispatch({ type: ADD_USER, user: userData })
            //dispatch({ type: ADD_ENTRY, user: userData.entries })
            //dispatch({ type: ADD_ITEM, user: userData.items })
            })
        
    }
    
    listUsers = () => {
            if(this.state.users.length > 0) {return (this.state.users.map( user => <UserCard key={user.id} user={user}></UserCard>))}
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