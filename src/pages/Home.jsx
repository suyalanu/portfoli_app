import React from "react";
import Education from "../components/Education";
import Project from "../components/Project";
import Job from "../components/Job";
import Skills from "../components/Skills";
import Message from "../components/Message";
import axios from "axios";
import Information from "../components/Information";

import Certificate from "../components/Certificate";
import "./Home.css";
import { useQuery } from "react-query";
import Login from "../components/Login";
import { useLocation } from "react-router-dom";
// function calc(int1, int2) {
//   return int1 + int2;
// }
//  {
//   contacts.map((contact)=>(<Linker key={contact.contact_id} title={contact.contact_name} description={contact.contact_link}/>))
// }

function Home() {
  //information
  // const fetchinfo = async () => {
  //   const response = await axios.get("https://localhost:7183/api/hahah/7", {
  //     headers: {
  //       Authorization: "abc",
  //     },
  //   });
  //   return response?.data;
  // };
  // const { data: hahah} = useQuery("hahah", fetchinfo);
  // console.log(hahah);
  var hahah = JSON.parse(localStorage.getItem("userData"));

  console.log(hahah.user_id);

  //education
  const fetchedu = async () => {
    const response = await axios.get(
      `https://localhost:7183/api/educations/${hahah.user_id}`,
      {
        headers: {
          Authorization: "abc",
        },
      }
    );
    return response?.data;
  };
  const { data: educations } = useQuery("educations", fetchedu);
  console.log(educations);

  //experiences
  const fetchexp = async () => {
    const response = await axios.get(
      `https://localhost:7183/api/experiences/${hahah.user_id}`,
      {
        headers: {
          Authorization: "abc",
        },
      }
    );
    return response?.data;
  };
  const { data: experiences } = useQuery("experiences", fetchexp);
  console.log(experiences);

  //projects
  const fetchpro = async () => {
    const response = await axios.get(
      `https://localhost:7183/api/projects/${hahah.user_id}`,
      {
        headers: {
          Authorization: "abc",
        },
      }
    );
    return response?.data;
  };
  const { data: projects } = useQuery("projects", fetchpro);
  console.log(projects);

  //skills
  const fetchskills = async () => {
    const response = await axios.get(
      `https://localhost:7183/api/skills/${hahah.user_id}`,
      {
        headers: {
          Authorization: "abc",
        },
      }
    );

    return response?.data;
  };
  const { data: skills } = useQuery("skills", fetchskills);
  console.log(skills);

  //certificates
  const fetchcerti = async () => {
    const response = await axios.get(
      `https://localhost:7183/api/certificates/${hahah.user_id}`,
      {
        headers: {
          Authorization: "abc",
        },
      }
    );
    return response?.data;
  };
  const { data: certificates } = useQuery("certificates", fetchcerti);
  console.log(certificates);

  return hahah == null ? null : (
    <>
      {/* <!! Introduction !!/> */}
      <Message />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Information
              title={hahah.name}
              linkedin={hahah.linkedin}
              contact={hahah.phone_no}
              email={hahah.email}
              address={hahah.address}
              summary={hahah.summary}
            />
          </div>
        </div>
      </div>

      {/* <!!Eudcation!!> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="sub">EDUCATION </h2>
            <hr />
            {educations?.map((edu) => (
              <Education
                title={edu.college_name}
                board={edu.board}
                course={edu.degree}
                year={edu.start_date}
                years={edu.end_date}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="sub">PROFESSIONAL EXPERIENCE</h2>
            <hr />
            {experiences?.map((exp) => (
              <Job
                title={exp.position}
                company={exp.institution_name}
                date={exp.started_date}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="project">
        <div className="row">
          <div className="col-md-12">
            <h2 className="sub">PROJECTS</h2>
            <hr />
            {projects?.map((pro) => (
              <Project
                title={pro.project_name}
                link={pro.link}
                description={pro.description}
                tech={pro.tech_stack}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h2 className="sub">Skills</h2>
              <hr />
              {skills?.map((skil) => (
                <Skills name={skil.skill_name} />
              ))}
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h2 className="sub">Certificates</h2>
              <hr />
              {certificates?.map((certi) => (
                <Certificate
                  heading="Certificate"
                  name={certi.title}
                  issu={certi.issued_name}
                  date={certi.issued_date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
