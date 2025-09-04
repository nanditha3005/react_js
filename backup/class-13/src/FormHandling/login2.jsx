//here using single handler for both inputs ,extra is name attribute
import { useState } from "react";
let Login = ()=>{
    let [user,setUser]=useState({"email":"","password":""})
    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{                 //is used to store the entered values whn login is clicked
        event.preventDefault();
        console.log(user)

    }
    return <div>
                <pre>{JSON.stringify(user)}</pre>  to print object
                <h5>Login Details</h5>
                <form  onSubmit={submitHandler} >
                EmailId:: <input type="text" name="Email"  onChange={updateHandler}/>   <br /><br />
                Password:: <input type="Password" name="Password" onChange={updateHandler}/>  <br/>
                <input type="submit" value="Login" />
                </form>
            </div>
}
export default Login;