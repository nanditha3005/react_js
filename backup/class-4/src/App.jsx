import React from "react";
import CompA from "./Props_Class/CompA";
import CompB from "./Props_Class/CompB";
import CompB_Class from "./Props_Class/CompB_Class";
let App=()=>{
     
  return( <div>
    <h3> App component</h3>
    <CompA/>
    {/* {<CompB/>} */}
    <CompB_Class
    eid={101}
        ename="Rahul"
        details={{ emp_Sal: 45000, loc: ["Wayanad", "New Delhi", "Kerala"] }}
        avail={true}/>
  </div>
  )
}
export default App;




