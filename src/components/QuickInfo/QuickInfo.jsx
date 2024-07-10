import React from "react";
import "./QuickInfo.css";

const QuickInfo = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col-12 col-md-6 col-lg-4 text-center">
        <h3 className="infoTitle">Project Plan</h3>
            <p className="infoText">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="infoButton">
              <a href="#">Read More</a>
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <h3 className="infoTitle">Interior Work</h3>
            <p className="infoText">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="infoButton">
              <a href="#">Read More</a>
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <h3 className="infoTitle">Realization</h3>
            <p className="infoText">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="infoButton">
              <a href="#">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
