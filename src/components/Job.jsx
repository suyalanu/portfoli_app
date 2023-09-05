import React from "react";

function Job(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3> {props.title}</h3>
            <p>{props.company}</p>
          </div>
          <div className="col-md-4">
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
