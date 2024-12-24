import React from "react";
import { useNavigate } from "react-router-dom";

const Box = (props) => {
  // console.log("ppp", props);
  const navigate = useNavigate();

  const goList = () => {
    navigate(`/list/${props.id}`);
  };

  return (
    <div className="box" onClick={goList}>
      <div>{props.name}</div>
    </div>
  );
};

export default Box;
