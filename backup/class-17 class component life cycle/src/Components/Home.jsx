import React, { Component } from 'react'

 class Home extends Component {
    constructor(props){
        super(props);
        console.log("First Constructor")
    }
    componentDidMount(){
        console.log("After Render Method")
    }
    componentWillUpdate(){
        console.log("At the time of updating state")
    }
    componentWillUnmount(){
        console.log("At the time of unmounting")
    }
    render() {
        console.log("Second - Render Method")
        return <div>Home Component</div>

    }
}

export default Home