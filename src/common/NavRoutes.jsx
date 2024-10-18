import React from 'react'
import Home from '../pages/Home'
import AddNew from '../pages/AddNew'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import View from '../pages/View';

const NavRoutes = () => {
  return (
    <Router>
         <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<View />} />
      </Routes>
    </Router>
  )
}

export default NavRoutes