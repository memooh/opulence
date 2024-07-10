import "./Stats.css";
import { useState, useEffect } from "react";

const Stats = () => {
  const [happyCustomers, setHappyCustomers] = useState(583);

  useEffect(() => {
    const interval = setInterval(() => {
      setHappyCustomers((prevCount) => prevCount + 1);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center my-5">
      <div className="stats">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 position-relative counter-item">
            <h1 className="counter-value">12</h1>
            <p className="counter-description">Years Of Experience</p>
            <div className="line"></div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 position-relative counter-item">
            <h1 className="counter-value">1074</h1>
            <p className="counter-description">Success Project</p>
            <div className="line"></div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 position-relative counter-item">
            <h1 className="counter-value">98</h1>
            <p className="counter-description">Active Project</p>
            <div className="line"></div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 counter-item">
            <h1 className="counter-value">{happyCustomers}</h1>
            <p className="counter-description">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
