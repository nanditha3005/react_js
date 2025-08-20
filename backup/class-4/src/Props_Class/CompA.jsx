import React from "react";
//import CompB from "./CompB";
import CompB_Class from "./CompB_Class";
class CompA extends React.Component{
    emp_Id=101;
    emp_Name="Rahul";
    emp_Details={
        'emp_Sal':45000,
        'loc':["Wayanad","New Delhi","Kerala"]
    }

    render(){
        return  <div>
            <h3>Component A</h3>
            <hr />
            <CompB_Class eid={this.emp_Id}
                         ename={this.emp_Name}
                         avail={true}
                         details={this.emp_Details}/>

        </div>
    }
}
export default CompA;
