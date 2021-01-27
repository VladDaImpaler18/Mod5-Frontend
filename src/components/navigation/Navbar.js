import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'; //doesn't work?

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'gray',
    color: 'white'
  }
function Navbar() {
    return (
        <div className="Nav-link">
            <NavLink to="/account" exact style={link} activeStyle={{ background: 'darkblue' }}>My Account</NavLink>
            <NavLink to="/budget" exact style={link} activeStyle={{ background: 'darkblue' }}>My Budget</NavLink>
            <NavLink to="/wishlist" exact style={link} activeStyle={{ background: 'darkblue' }}>My Wishlist</NavLink>
        </div>
    )
}

export default Navbar;