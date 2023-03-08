import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        // <div>
        //     <ul>
        //         <li><a href='/home'>Home</a></li>
        //         <li><a href="/contact">Contact</a></li>
        //         <li><a href="/blogs">Blogs</a></li>
        //     </ul>
        // </div>
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blogs">Blogs</Link> */}

            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
        </nav>
    )
}

export default Navbar