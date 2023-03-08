
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs';
import Errors from './Components/Errors';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="/blogs/:title" element={<BlogDetails />} />
        <Route path='*' element={<Errors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// /home -> <Home/>
// /contact -> <Contact />

