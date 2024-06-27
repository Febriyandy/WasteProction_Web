import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from '../pages/Landingpage';
import Notfound from '../pages/Notfound';
import Navbar from '../components/Navbar';
import Navbar1 from '../components/Navbar1';
import { Footer }from '../components/Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Courosel from '../components/Courosel';

const Routing = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/'>
                <Route path="/" element={<Landingpage/>}/>
                <Route path="*" element={<Notfound/>}/>
                <Route path='/Navbar' element={<Navbar/>}/>
                <Route path='/Navbar1' element={<Navbar1/>}/>
                <Route path='/Footer' element={<Footer/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Courosel' element={<Courosel/>}/>
            </Route>
        </Routes>
        </Router>
    );
}

export default Routing