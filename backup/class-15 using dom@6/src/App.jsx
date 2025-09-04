import React from 'react';
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

const App =()=>{

  return <div>
          <Router>
            <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
              <Link to="./index" className='navbar-brand'>Logo</Link>
              <div className='ml-auto'> 
                <ul className='navbar-nav'>
                  <li><Link to="/index" className='nav-link'>Home</Link></li>
                  <li><Link to="/about" className='nav-link'>About</Link></li>
                  <li><Link to="/services" className='nav-link'>Services</Link></li>
                  <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                </ul>
              </div>
            </nav>
            <Routes>
              <Route  path='/index' element={<Home/>}/>
              <Route  path='/about' element={<About/>}/>
              <Route  path='/services' element={<Services/>}/>
              <Route  path='/contact' element={<Contact/>}/>
            </Routes>
          </Router>
         </div>
}
export default App




