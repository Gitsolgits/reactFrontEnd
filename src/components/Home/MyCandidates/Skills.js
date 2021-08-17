import React from "react";
import { Row } from "react-bootstrap";

export default function Skills({ skills, className }) {
  return (
    <Row className={`skills ${className}`}>
      <div>{skills}</div>
    </Row>
  );
}
