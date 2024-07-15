import "./Projects.css";
import banner from "/images/pages/SingleServices/banner_single_services.png";
import Button from "../../components/Button/Button";

const Projects = () => {
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
        <h1 className="aboutUs text-center">Our Projects</h1>
      </div>
    </>
  );
};

export default Projects;
