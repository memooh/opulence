import "./Pricing.css";
import banner from "/images/pages/SingleServices/banner_single_services.png";
import Button from "../../components/Button/Button";

const Pricing = () => {
  const prices = [
    {
      title: "Design Advices",
      price: "29",
      description:
        "General living space advices,Rennovation advices,Interior design advices,Furniture reorganization,Up to 5 hours meetings",
      button: "Select",
    },
    {
      title: "Complete interior",
      price: "39",
      description:
        "Complete home redesign,Interior and exterior works,Modular interior planning,Kitchen design,Garages organization",
      button: "Select",
      className: "complete-interior", // Add a class name for this item
    },
    {
      title: "Furniture design",
      price: "300",
      description:
        "Furniture for living room,Furniture refurbishment,Sofas and armchairs,Tables and chairs,Kitchens",
      button: "Select",
    },
  ];

  return (
    <>
      <div className="banner">
        <img
          src={banner}
          alt="banner"
          className="bannerImg d-none d-lg-block"
        />
        <h1 className="aboutUs text-center">Pricing</h1>
      </div>

      <div className="container mt-5">
        <div className="row text-center">
          {prices.map((price, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 pricing-item">
              <h4 className={`pricingTitle ${price.className || ""}`}>
                {price.title}
              </h4>
              <p className={`pricingPrice ${price.className || ""}`}>
                {price.price}
              </p>
              <ul className="pricingDescription">
                {price.description.split(",").map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <Button onClick={() => console.log("Clicked!")} variant="primary">
                Get Free Estimate
              </Button>{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
