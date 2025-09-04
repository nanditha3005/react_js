import React from 'react'
//import Navbar from './Navbar/Navbar';
import Navbar from './Navbar/Navbar-Multi';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
const App = () => {
  return <div>
          <Router>
              <Navbar/>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/index" component={Home}/>
                <Route path="./contact" component={Contact}/> 
              </Switch>
          </Router>
        </div>
}
export default App;