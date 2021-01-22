import './App.css';
import React, { Component } from 'react';
import BudgetForm from './components/BudgetForm';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Page!</h1>
          <BudgetForm></BudgetForm>
        </header>
      </div>
    )
  }
}

export default App;