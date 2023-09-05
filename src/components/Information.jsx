function Information(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1 className="name">
              <u>{props.title}</u>
            </h1>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/anushka-suyal-704458221/"
            >
              <i className="fa-brands fa-linkedin"></i>LinkedIn:{props.linkedin}
            </a>
          </div>

          <div className="col-md-6">
            <p className="icon ">
              {props.contact}
              <i className="fa-solid fa-phone"></i>
            </p>
            <p className="icon ">
              {props.email} <i className="fa-solid fa-envelope"></i>
            </p>
            <p className="icon ">
              {props.address} <i className="fa-solid fa-house"></i>
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="sub">SUMMARY </h2>
            <hr />

            <p>{props.summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
