import React from "react";

import { Button } from "../Button/Button";
import "./styles.css";

export default function Card({ position, primary, title, price, items }) {
  let cardClass = "card ";

  if (primary) {
    cardClass += "primary";
  } else {
    cardClass += "secondary";
  }

  switch (position) {
    case "left":
      cardClass += " left";
      break;
    case "right":
      cardClass += " right";
      break;
    default:
      break;
  }

  return (
    <div className={cardClass}>
      <h1>{title}</h1>

      <h2>
        <span>$</span>
        {price}
      </h2>

      <ul>
        {items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
      {primary ? (
        <Button
          color="#f8a026"
          outline="#f8a026"
          text="white"
          hover={"black"}
          borderradius={"7px"}
          shadow={"none"}
          width={"200px"}
        >
          Get Started
        </Button>
      ) : (
        <Button
          color={"white"}
          text="#DA4459"
          stroke={"0px"}
          outline={"#f8a026"}
          hover={"black"}
          borderradius={"7px"}
          shadow={"none"}
          width={"200px"}
        >
          Get Started
        </Button>
      )}
    </div>
  );
}
