import React from "react";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <div>
      <div className=" mb-4 bg-light" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Notifications</h5>
          <p class="card-text">Notifications here.</p>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default Notifications;
