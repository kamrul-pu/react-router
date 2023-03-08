import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import AddBlog from '../pages/AddBlog';
import Errors from '../pages/Errors';
import Home from '../pages/Home';
import '../Components/navbar.css';
import Protected from '../pages/Protected';


const Navbar = ({ loggedIn }) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add-blog">Add Blog</Link>
            <Link to="/about">About</Link>
        </nav>

    )
}


const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Navbar loggedIn={loggedIn} />
            {loggedIn ? <button onClick={() => setLoggedIn(!loggedIn)}>Logout</button> : <button onClick={() => setLoggedIn(!loggedIn)}>Login</button>}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-blog' element={<Protected loggedIn={loggedIn}>
                    <AddBlog />
                </Protected>} />
                <Route path='/about' element={<About />} />
                <Route path="/*" element={<Errors />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index