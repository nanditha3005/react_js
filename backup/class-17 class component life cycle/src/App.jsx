import {NavLink,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Components/Home'
import Employees from './Components/Employees';
import Login from './Components/Login';

let App=()=>{
    let mystyles={color:"blue"}
    return <div>
            <Router>
                <Navbar/>
                <Routes>
                    
                    <Route path="/Home"  element={<Home/>}/>
                    <Route path="/Employees"  element={<Employees/>}/>
                    <Route path="/Login"  element={<Login/>}/>
                   
                    
                </Routes>
            </Router>
        </div>
}
export default App;