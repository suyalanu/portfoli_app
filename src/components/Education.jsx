import React from "react";

function Education(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3> {props.title}</h3>
            <p>
              {props.board} Degree in {props.course}
            </p>
          </div>
          <div className="col-md-4">
            <p>
              {props.year}- {props.years}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
