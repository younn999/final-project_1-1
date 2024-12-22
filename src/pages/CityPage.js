import React from "react";
import Box from "../components/Box";
import { Container, Row, Col } from "react-bootstrap";

const CityPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <Box name="서울" id={1} />
          </Col>
          <Col lg={3}>
            <Box name="인천" id={2} />
          </Col>
          <Col lg={3}>
            <Box name="대전" id={3} />
          </Col>
          <Col lg={3}>
            <Box name="대구" id={4} />
          </Col>
          <Col lg={3}>
            <Box name="광주" id={5} />
          </Col>
          <Col lg={3}>
            <Box name="부산" id={6} />
          </Col>
          <Col lg={3}>
            <Box name="울산" id={7} />
          </Col>
          <Col lg={3}>
            <Box name="세종" id={8} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CityPage;
