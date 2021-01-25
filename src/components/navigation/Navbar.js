import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <div className="Nav-link">
            <NavLink to="/account" exact activeStyle={{ background: 'darkblue' }}>My Account</NavLink>
            <NavLink to="/budget" exact activeStyle={{ background: 'darkblue' }}>My Budget</NavLink>
            <NavLink to="/wishlist" exact activeStyle={{ background: 'darkblue' }}>My Wishlist</NavLink>
        </div>
    )
}

export default Navbar;