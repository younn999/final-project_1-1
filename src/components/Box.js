import React from "react";

const Box = (props) => {
  console.log("ppp", props);
  return (
    <div className="box">
      <div>{props.name}</div>
    </div>
  );
};

export default Box;
