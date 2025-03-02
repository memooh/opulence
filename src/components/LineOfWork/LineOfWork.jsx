import React from "react";
import Services1 from "/images/pages/Services/services_1.png";
import Services2 from "/images/pages/Services/services_2.png";
import Services3 from "/images/pages/Services/services_3.png";
import Services4 from "/images/pages/Services/services_4.png";

const LineOfWork = () => {
  return (
    <div>
      <div className="container hwwg">
        <h1 className="text-center">How We Work</h1>
        <h4 className="text-center mb-5">
          It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
        </h4>
        <div className="hwwGrid">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 align-items-center mb-4 mb-lg-0">
              <img src={Services1} alt="Concept & Details" className="img-fluid" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="mt-3 mt-lg-0">Concept & Details</h1>
              <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.</p>
            </div>
          </div>
          <div className="row mt-5 mb-5 flex-row-reverse">
            <div className="col-lg-6 align-items-center mb-4 mb-lg-0">
              <img src={Services2} alt="Creative Process" className="img-fluid" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="mt-3 mt-lg-0">Creative Process</h1>
              <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.</p>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 align-items-center mb-4 mb-lg-0">
              <img src={Services3} alt="Execution" className="img-fluid" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="mt-3 mt-lg-0">Execution</h1>
              <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.</p>
            </div>
          </div>
          <div className="row mt-5 mb-5 flex-row-reverse">
            <div className="col-lg-6 align-items-center mb-4 mb-lg-0">
              <img src={Services4} alt="Finalization" className="img-fluid" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="mt-3 mt-lg-0">Finalization</h1>
              <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineOfWork;
