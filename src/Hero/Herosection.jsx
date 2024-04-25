import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Herosection() {
  return (
    <>
      <div className="hero-section">
        <div className="container bg-body-tertiary rounded-3">
          <h1 className="fw-bold text-dark fw-bold h1 text-center pt-5">
            A warm welcome!
          </h1>
          <p className="text-center d-flex justify-content-center align-items-center fs-4">
            Bootstrap utility classes are used to create this jumbotron since
            the old <br></br> component has been removed from the framework. Why
            create custom CSS <br></br> when you can use utilities?
          </p>
          <button className="btn btn-primary text-white d-block mx-auto">
            Call to action
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Herosection;
