import './App.css';
import React, { Component } from 'react';


import BudgetForm from './components/BudgetForm';
import UserContainer from './containers/UsersContainer';

class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Page!</h1>
        </header>
        <>
            <h4>User Selection:</h4>
            <UserContainer></UserContainer>
        </>
        <p></p>
        <> Budget Form:  
          <BudgetForm></BudgetForm>
        </>
      </div>
    )
  }
}

export default App;