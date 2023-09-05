import React from "react";

function Project(props) {
  return (
    <>
      <div>
        <ul>
          <li>
            <h4 className="project-name">{props.title} </h4>
            <p className="description">
              <a
                className="github"
                href="https://github.com/suyalanu/Online-Food-Ordering-System.git"
              >
                Github:
                {props.link}
              </a>
            </p>
            <p>
              {props.description}
              {props.tech}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Project;
