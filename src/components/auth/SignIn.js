import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    email: null,
    password: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="bg-light">
          {authError ? (
            <div
              className="alert alert-warning fade show"
              role="alert"
            >
              {authError}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ) : (<div></div>)}
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
          <button
            disabled={
              this.state.email === "" ||
              this.state.email === null ||
              this.state.password === null ||
              this.state.password === ""
            }
            type="submit"
            className="btn btn-fill btn-primary shadow"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError
});

export default connect(
  mapStateToProps,
  { signIn }
)(SignIn);
