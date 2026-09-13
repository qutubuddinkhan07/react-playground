import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/Nav";

const WebPage = () => {
  return (
    <div>
      <Nav />

      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Lorem</h1>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            tempora.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Get Started</button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Features</h2>
          <div className="row g-4" >
            <div className="colo-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Feature One</h5>
                  <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="colo-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Feature One</h5>
                  <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="colo-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Feature One</h5>
                  <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebPage;
