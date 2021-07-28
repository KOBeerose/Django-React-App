import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
import Card from "../Card/Card";
import plans from "./Plans";
import Slider from "../Slider/Slider";

import { Fade } from "react-awesome-reveal";

const Pricing = () => {
  const [planPeriod, setPlanPeriod] = useState("monthly");

  function togglePeriod(sliderValue) {
    sliderValue ? setPlanPeriod("monthly") : setPlanPeriod("annually");
  }
  return (
    <Fade direction="up">
      <div className="pricing">
        <h6 className="price-header">Get the right plan for you</h6>

        <Slider onText="Monthly" offText="Annually" setValue={togglePeriod} />

        <div className="card-container">
          <Card
            position="left"
            title={plans.basic.title}
            price={
              planPeriod === "monthly"
                ? plans.basic.price.monthly
                : plans.basic.price.annually
            }
            items={plans.basic.benefits}
          />
          <Card
            primary
            title={plans.professional.title}
            price={
              planPeriod === "monthly"
                ? plans.professional.price.monthly
                : plans.professional.price.annually
            }
            items={plans.professional.benefits}
          />
          <Card
            position="right"
            title={plans.master.title}
            price={
              planPeriod === "monthly"
                ? plans.master.price.monthly
                : plans.master.price.annually
            }
            items={plans.master.benefits}
          />
        </div>
      </div>
    </Fade>
  );
};

export default Pricing;
