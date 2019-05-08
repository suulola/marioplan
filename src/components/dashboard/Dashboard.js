import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <ProjectList projects={projects} />
          </div>
          <div className="col-12 col-md-5 offset-md-1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.authStatusChanged.projects
  })

export default compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps),
)(Dashboard);
