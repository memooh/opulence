import "./Interno.css";
import Button from "../Button/Button";

export const Interno = () => {
  return (
    <div className="interno-container">
      <div className="container">
        <div className="interno-text">
          <h1 className="interno-title">Wanna join the interno?</h1>
          <p className="interno-subtitle">
            It is a long established fact will be distracted..
          </p>
          <Button onClick={() => console.log("Clicked!")} variant="primary">
            Contact With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Interno;
