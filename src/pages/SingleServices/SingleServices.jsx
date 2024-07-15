import "./SingleServices.css";
import banner from "/images/pages/SingleServices/banner_single_services.png";
import WeLoveDesign from "/images/pages/SingleServices/We_love_design.png";
import companies from "/images/companies.png";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Stats from "../../components/Stats/Stats";

const SingleServices = () => {
  return (
    <>
      <div className="banner">
        <img
          src={banner}
          alt="banner"
          className="bannerImg d-none d-lg-block"
        />
        <h1 className="aboutUs text-center">Single Services</h1>
      </div>

      <div className="container mt-5">
        <div className="ssText text-center">
          <h1 className="ssTitle">
            We set the trends of <br />
            modern living services.
          </h1>

          <p className="ssTinyText mt-5">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12">
            <div className="ssBox">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                illum fuga aut odio qui ipsa quae, quam reprehenderit quo culpa,
                eaque ullam ex eum facere mollitia quas dicta voluptate dolores.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="ssBox">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                illum fuga aut odio qui ipsa quae, quam reprehenderit quo culpa,
                eaque ullam ex eum facere mollitia quas dicta voluptate dolores.
              </p>
            </div>
          </div>
        </div>

        <div className="companies">
          <img
            src={companies}
            alt="Companies that work with us."
            className="img-fluid"
          />
        </div>
      </div>

      <VideoPlayer />

      <div className="container ssBoxText">
        <div className="row">
          <div className="col-lg-6 col-md-12 text-left">
            <h1 className="ssTitle">Use of Interior</h1>
            <p className="ssBox">
              We provide high quality design services. Project on time and
              Latest Design. Scientific Skills For getting a better result.
              Renovations Benefit of Service. We are confident about our
              projects.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-right">
            <h1 className="ssTitle">Make An Art</h1>
            <p className="ssBox">
              We provide high quality design services. Project on time and
              Latest Design. Scientific Skills For getting a better result.
              Renovations Benefit of Service. We are confident about our
              projects.
            </p>
          </div>
        </div>

        <div className="weLoveDesigns ">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img
                src={WeLoveDesign}
                alt="We Love Design"
                className="img-fluid wldImg"
              />
            </div>
            <div className="col-lg-6 col-md-12 mt-5 ">
              <h1 className="ssTitle">
                We love design.That's <br />
                how we got here.
              </h1>
              <p className="ssBox">
                It is a long established fact that a reader will be distracted
                by the of readable content .{" "}
              </p>
            </div>
          </div>
        </div>

        <Stats />
      </div>
    </>
  );
};

export default SingleServices;
