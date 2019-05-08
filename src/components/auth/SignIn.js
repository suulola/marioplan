import React, { Component } from "react";

class SignIn extends Component {
  state = {
      email: null,
      password: null,

  };
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="bg-light">
          <h5 className="text-muted lead"> Sign In</h5>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-fill btn-primary shadow">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
