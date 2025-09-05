const { useEffect } = require("react")

let Login= ()=>{
    
    useEffect(()=>{
        console.log("after return statement")
    },[]);

    return <div>
                <h3>Login Component</h3>
            </div>
}
export default Login;