import React from "react";
import { Row } from "react-bootstrap";
import "../../common/inforow.css";

export default function CandidateName(props) {
  return (
    <Row className="candidate-name">
      <div>{props.name}</div>
      <span className="arrow-button"></span>
    </Row>
  );
}
