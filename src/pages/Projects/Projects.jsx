import React from "react";
import "./Projects.css";
import banner from "/images/pages/SingleServices/banner_single_services.png";
import Button from "../../components/Button/Button";

const Projects = () => {
  const portfolioItems = [
    {
      title: "Modern Living Room",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      description: "Sleek and contemporary living space design"
    },
    {
      title: "Cozy Bedroom",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      description: "Warm and inviting bedroom interior"
    },
    {
      title: "Minimalist Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      description: "Clean and functional kitchen design"
    },
    {
      title: "Luxurious Bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      description: "Elegant and spa-like bathroom interior"
    },
    {
      title: "Home Office",
      image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      description: "Productive and stylish home workspace"
    },
    {
      title: "Outdoor Patio",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      description: "Relaxing outdoor living area design"
    }
  ];

  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
  };

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

      <div className="container mt-5">
        <div className="portfolio-section">
          <h2 className="text-center mb-5">Our Portfolio</h2>
          <div className="row">
            {portfolioItems.map((item, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-4">
                <div className="portfolio-card">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid mb-3" 
                    style={imageStyle}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button variant="primary">View Project</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
