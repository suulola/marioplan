import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";

const Notifications = ({ notifications }) => {
  return (
    <div>
      <div className=" mb-4 bg-light rounded" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Notifications</h5>
          <div className="">
            {notifications &&
              notifications.map(item => (
                <li className="list-group-item bg-light" key={item.id}>
                  <span className="text-danger">{item.user} </span>
                  <span>{item.content}</span>
                  <br />
                  <sub className="text-muted m-0 p-0">
                    {moment(item.time.toDate()).fromNow()}
                  </sub>
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Notifications);
