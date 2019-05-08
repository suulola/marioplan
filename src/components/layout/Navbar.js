import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";

class Navbar extends Component {
  state = {
    isLoggedIn: true
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-secondary mb-5">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {this.state.isLoggedIn ? <SignInLinks /> : <SignOutLinks />}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;