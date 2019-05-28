import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class SignUp extends Component {
  state = {
    email: null,
    password: null,
    firstname: "",
    lastname: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="bg-light">
          <h5 className="text-muted lead"> Sign Up</h5>
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
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-fill btn-success shadow">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignUp);
