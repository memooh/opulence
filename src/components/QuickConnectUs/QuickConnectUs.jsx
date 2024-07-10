import "./QuickConnectUs.css";
import Button from "../Button/Button";

const QuickConnectUs = () => {
  return (
    <div className="container mt-5">
      <div className="quickConnect-container">
        <div className="quickConnect-text">
          <h1 className="quickConnect-title">We create art for modern life </h1>
          <p className="quickConnect-subtitle">
            There are many variations of the passages of <br /> lorem Ipsum from
            available, majority.
          </p>
          <Button onClick={() => console.log("Clicked!")} variant="primary">
            Get Free Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickConnectUs;
