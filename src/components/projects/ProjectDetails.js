import React from "react";
import { Link } from "react-router-dom";

const ProjectDetails = props => {
  const { id } = props.match.params;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-body">
              <Link to="/" className="m-1">
                <h4 className="text-muted   p-0">Project title - {id} </h4>{" "}
              </Link>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem aliquid minus ipsa in vero asperiores sequi animi
                earum dolorum, officia aliquam quas. Nisi nam aliquid
                consectetur, omnis a nemo necessitatibus?
              </p>
              <hr />
              <p className="card-subtitle text-muted m-0 p-0">
                Posted by Suulola
              </p>
              <sub className="text-muted m-0 p-0">3rd September, 2021</sub>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
