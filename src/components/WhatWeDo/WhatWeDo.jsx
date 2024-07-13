import "./WhatWeDo.css";
import banner from "/images/pages/About_Us/banner.png";
import WhatWeDo1 from "/images/pages/About_Us/What_we_do_1.png";
import WhatWeDo2 from "/images/pages/About_Us/What_we_do_2.png";
import Button from "../Button/Button";

const WhatWeDo = () => {
  return (
    <>
      <div className="banner">
        <img
          src={banner}
          alt="banner"
          className="bannerImg d-none d-lg-block"
        />
        <h1 className="aboutUs text-center">ABOUT US</h1>
      </div>

      <div className="container mt-5">
        <div className="bunnyWilliams">
          <h1 className="bunnyWilliamsTitle text-center">
            "I like an interior that defies labeling. I don't really want
            someone to walk into a room and know that I did it"
          </h1>
          <p className="bunnyWilliamsText text-center mt-5">BUNNY WILLIAMS</p>
        </div>

        <div className="wwd">
          <div className="row align-items-center alignRow">
            <div className="col-lg-6">
              <h1 className="wwdTitle">What We Do</h1>
              <p className="wwdText">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <Button
                onClick={() => console.log("Clicked!")}
                variant="primary"
                style={{ backgroundColor: "#292F36 !important" }}
              >
                Our Concept
              </Button>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src={WhatWeDo1}
                alt="A picture of a living room"
                className="img-fluid wwdImage"
              />
            </div>
          </div>

          <div className="row align-items-center alignRow2">
            <div className="col-lg-6 order-lg-2">
              <h1 className="wwdTitle">The End Result</h1>
              <p className="wwdText">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <Button
                onClick={() => console.log("Clicked!")}
                variant="primary"
                style={{ backgroundColor: "#292F36 !important" }}
              >
                Our Concept
              </Button>
            </div>

            <div className="col-lg-6 order-lg-1 d-none d-lg-block">
              <img
                src={WhatWeDo2}
                alt="A picture of a living room"
                className="img-fluid wwdImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
