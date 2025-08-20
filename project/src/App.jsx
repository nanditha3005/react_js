import React from "react";
import Employee from "./Employee/Employees"
import Navbar from "./Navbar/navbar"; 
let App=()=>{
     
  return( <div>
    <h3> App component</h3>
    <Employee/>
    <Navbar/>
  </div>
  )
}
export default App;
