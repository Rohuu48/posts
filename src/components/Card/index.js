import React from "react";

const Card = ({ details }) => {
  return (
    <div
      style={{
        width: "300px",
        margin: "20px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <h1>{details.title}</h1>
      <p>{details.body}</p>
    </div>
  );
};

export default Card;
