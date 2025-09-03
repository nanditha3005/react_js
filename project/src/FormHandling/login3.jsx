//this is same as login2 but it was using functional components (usestate) and this is class
//  component(constructor,thisstate)

import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "",password: ""}}

  // Handler to update state based on input name and value
  updateHandler = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})}


  // Form submission handler
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <h5>Login Details</h5>
        <form onSubmit={this.submitHandler}>
          Email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.updateHandler}
          />
          <br />
          <br />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updateHandler}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
