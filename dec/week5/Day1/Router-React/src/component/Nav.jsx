import React from 'react'
import { NavLink } from 'react-router'

function Nav() {
    return (
        <div>
            {/* <Link to="/dash">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/login">Login</Link> */}

            <NavLink to="/dash">Dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default Nav