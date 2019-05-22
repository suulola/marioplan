import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  let content;
  const { project } = props;
  if (project) {
    console.log(project);
    content = (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-body">
              <Link to="/" className="m-1">
                <h4 className="text-muted   p-0"> {project.title} </h4>{" "}
              </Link>
              <p className="card-text">{project.content}</p>
              <hr />
              <p className="card-subtitle text-muted m-0 p-0">
                Posted by {project.authorLastName}
              </p>
              <sub className="text-muted m-0 p-0">
                Date is {new Date(project.createdAt.seconds).toDateString()}
              </sub>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = <div>Loading Project. . . </div>;
  }
  return <div>{content}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
