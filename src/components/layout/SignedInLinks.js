/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div className="navbar-nav w-100 d-flex justify-content-end mr-5">
      <Link className="nav-item nav-link text-white" to="/create">
        New Project
      </Link>

      <Link
        onClick={() => props.signOut()}
        className="nav-item nav-link text-white"
        to="/"
      >
        Log Out
      </Link>
      <Link
        className="nav-item nav-link rounded-circle bg-danger text-white"
        to="/"
      >
        NN
      </Link>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {

//   }
// }

export default connect(
  null,
  { signOut }
)(SignedInLinks);
