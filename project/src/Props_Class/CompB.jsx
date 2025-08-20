import React from "react";
let CompB=(props)=>{

    return <React.Fragment>
        <h3>Component B</h3>
        <pre>{JSON.stringify(props)}</pre> 
        <h4>Employee Id:{props.eid}</h4>
        <h4>Employee Name:{props.ename}</h4>
        <h4>Employee salary:{props.details.emp_Sal}</h4>
        <h4>Employee Location:{props.details.loc[2]}</h4>
        </React.Fragment>

}
export default CompB;


/* <pre>{JSON.stringify(props)}</pre>    convert the props object into a JSON string and display it on the screen inside <pre> tags */