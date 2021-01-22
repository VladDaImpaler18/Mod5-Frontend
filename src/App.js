import './App.css';
import React, { Component } from 'react';
import BudgetForm from './components/BudgetForm';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/userActions';
import UserContainer from './containers/UsersContainer';

class App extends Component {

  // componentDidMount() {
  //   //console.log("props in DidMount", this.props)
  //   //this.props.fetchUsers()
  // }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Page!</h1>
          <UserContainer></UserContainer>
          <BudgetForm></BudgetForm>
        </header>
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   console.log("App State:", state);
//   debugger;
//   return {
//     user: 
//   }
// }

export default App;