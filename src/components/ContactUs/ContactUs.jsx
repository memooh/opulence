import "./ContactUs.css";
import Button from "../Button/Button";

function ContactUs() { 
    const handleClick = () => {
    alert("Thank you for your message! Our mail-servers are currently disabled. Please try again later!");
  };
  return (
    <div>
      <div className="contact-form">
        <div className="container">
          <h1 className="text-center contactTitle">
            Creative project? Let's have a productive talk.
          </h1>
          <form action="#" className="formContact">
            <div className="row">
              <div className="col-lg-6">
                <input type="text" className="form-control custom-input" placeholder="Name" />
              </div>
              <div className="col-lg-6">
                <input type="email" className="form-control custom-input" placeholder="Email" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 subjectForm">
                <input type="text" className="form-control custom-input" placeholder="Message" />
              </div>
            </div>
            <div className="button-container">
              <Button
                onClick={handleClick}
                className="align-items-center"
                variant="primary"
              >
                Send Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
