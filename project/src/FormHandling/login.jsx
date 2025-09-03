//here using two handler for two inputs

import { useState } from "react";
let Login = ()=>{
    let [user,setUser]=useState({"email":"","password":""})
    let EmailHandler=(event)=>{
        console.log(event.target.value) //just to check it is logged or not ,not neseccary in code
        setUser({...user,"email":event.target.value}) //use of handler:update ur state
    }
    let pwdHandler=(event)=>{
        setUser({...user,"Password":event.target.value})
    }

    return <div>
                <pre>{JSON.stringify(user)}</pre>  to print object
                <h5>Login Details</h5>
                <form >
                EmailId:: <input type="text" onChange={EmailHandler} />   <br /><br />
                Password:: <input type="text" onChange={pwdHandler} />  <br/>
                <input type="submit" value="Login" />
                </form>
            </div>
}
export default Login;