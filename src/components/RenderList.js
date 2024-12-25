import React from "react";
import { Row, Col } from "react-bootstrap";

const RenderList = (props) => {
  // console.log("ppp", props);
  return (
    <div className="render-list">
      <Row>
        <Col>
          <div>{props.item.title}</div>
        </Col>
      </Row>
    </div>
  );
};

export default RenderList;
