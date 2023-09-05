import React from "react";

function Certificate(props) {
  return (
    <>
      <div>
        <ul>
          <li>
            <p>{props.name}</p>
            <div className="certif">
              <p>{props.issu}</p>
              <p classname="dm"> |{props.date} </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Certificate;
