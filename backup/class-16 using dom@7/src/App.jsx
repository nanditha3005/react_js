import React from 'react';
import {NavLink,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Components/Home'
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

let App =()=>{
  let mystyles={color:"blue"}
  return <div>
          <Router>
            <Navbar/>
            <Routes>
              <Route  path="/index" element={<Home/>}/>
              <Route  path="/about" element={<About/>}/>
              <Route  path="/services" element={<Services/>}/>
              <Route  path="/contact" element={<Contact/>}/>
              <Route  path="*" element={<h3 style={mystyles}>404 - Page Not Found</h3>} />
            </Routes>
          </Router>
         </div>
}
export default App







