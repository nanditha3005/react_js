import React from "react";
 
class CompB_Class extends React.Component{
    render(){
        const{eid,ename,details,avail}=this.props
        return (<div>
            <h3>Component B</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>Employee Id:{this.props.eid}</h4>
            <h4>Employee Name:{this.props.ename}</h4>
            <h4>Employee salary:{this.props.details.emp_Sal}</h4>
            <h4>Employee Location:{this.props.details.loc[2]}</h4>
            <h4>Available: {this.props.avail ? "Yes" : "No"}</h4>
            <hr />
        </div>
        )
    }
}
export default CompB_Class;


