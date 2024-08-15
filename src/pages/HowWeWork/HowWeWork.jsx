import "./HowWeWork.css";
import banner from "/images/pages/Services/banner_services.png";
import OurWorkStyle from "../../components/ourWorkStyle/ourWorkStyle";
import LineOfWork from "../../components/LineOfWork/LineOfWork";

const HowWeWork = () => {
  return (
    <>
      <div className="banner mb-5 position-relative">
        <img src={banner} alt="banner" className="bannerImg w-100" />
        <h1 className="aboutUs text-center position-absolute top-50 start-50 translate-middle">Services</h1>
      </div>
      <OurWorkStyle />
      <div className="my-5"></div>
      <LineOfWork />
    </>
  );
};

export default HowWeWork;
