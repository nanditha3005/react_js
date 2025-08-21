import React from "react";
import CompB from "./CompB";
let CompA=()=>{
    let msg ="Hello! Good Morning";
    return <div>
            <h3>Component A</h3>
            <h5>Data:{msg}</h5>
            <hr/>
            <CompB msg={msg}/>
           </div>
}
export default CompA;

//Prop drilling in ReactJS refers to the practice of passing props (data or functions) through multiple 
// layers of nested components—even when intermediate components don’t use them—just so that a deeply nested
//  child can access the data.
