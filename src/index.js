import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar'
import IncomeStatement from './containers/IncomeStatement';
import Wishlist from './containers/WishlistCart';
import Account from './components/navigation/Account';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  //<React.StrictMode>
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route path="/" render ={ () => <h1>Welcome to Budget Buddy!</h1>} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/budget" component={IncomeStatement} />
          <Route exact path="/wishlist" component={Wishlist} />
        </>
      </Router>
    </Provider>,
  
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
