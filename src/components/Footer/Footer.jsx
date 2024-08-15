import React from 'react';
import logo from '/images/logo.png';

function Footer() {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-uppercase fw-bold">
              <img src={logo} alt="Logo" style={{ width: '24px', marginRight: '8px' }} />
              OPULENCE
            </h5>
            <p>It is a long established fact that a reader will be distracted lookings.</p>
            <div className="d-flex mt-3">
              <a href="#" className="text-dark me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark me-3"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="text-uppercase fw-bold">Pages</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">About Us</a></li>
              <li><a href="#" className="text-dark">Our Projects</a></li>
              <li><a href="#" className="text-dark">Our Team</a></li>
              <li><a href="#" className="text-dark">Contact Us</a></li>
              <li><a href="#" className="text-dark">Services</a></li>
            </ul>
          </div>
          
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="text-uppercase fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Kitchen</a></li>
              <li><a href="#" className="text-dark">Living Area</a></li>
              <li><a href="#" className="text-dark">Bathroom</a></li>
              <li><a href="#" className="text-dark">Dinning Hall</a></li>
              <li><a href="#" className="text-dark">Bedroom</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-uppercase fw-bold">Contact</h5>
            <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p><a href="mailto:contact@selhono.com" className="text-dark">contact@OPULENCE</a></p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col text-center mt-4">
            <p className="text-muted mb-0">&copy; OPULENCE | CREATED BY MEHMET OZTURK | DESIGN FROM FIGMA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
