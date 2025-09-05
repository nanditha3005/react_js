const { useEffect } = require("react")

let Home= ()=>{
    
    useEffect(()=>{
        console.log("after return statement")
    },[]);

    return <div>
                <h3>Home Component</h3>
            </div>
}
export default Home;