import React from 'react';
import BudgetForm from '../components/BudgetForm';
import './popup.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <BudgetForm></BudgetForm>
        <button onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}

export default Popup;