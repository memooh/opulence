import "./HowWeWork.css";
import banner from "/images/pages/Services/banner_services.png";

import OurWorkStyle from "../../components/ourWorkStyle/ourWorkStyle";
import LineOfWork from "../../components/LineOfWork/LineOfWork";


const HowWeWork = () => {
  return (
    <>
      <div className="banner">
        <img
          src={banner}
          alt="banner"
          className="bannerImg d-none d-lg-block"
        />
        <h1 className="aboutUs text-center">Services</h1>
      </div>
      <OurWorkStyle />
      <LineOfWork />
    </>
  );
};

export default HowWeWork;
