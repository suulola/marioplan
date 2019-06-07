import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'


const ProjectSummary = ({ project }) => {
  return (
    <div className=" mb-4 bg-light" style={{ width: "18rem" }}>
      <div className="card-body">
        <Link to={`/project/${project.id}`} className="m-1 card-title">
          {" "}
          <h4 className="text-muted   p-0">{project.title}</h4>{" "}
        </Link>
        <p className="card-subtitle text-muted m-0 p-0">Posted by {project.authorFirstName} {project.authorLastName}  </p>
        <sub className="text-muted m-0 p-0"> {moment(project.createdAt.toDate()).fromNow() } </sub>
      </div>
    </div>
  );
};

export default ProjectSummary;
