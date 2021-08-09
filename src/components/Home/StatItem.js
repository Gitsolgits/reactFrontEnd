import React from "react";
import { Col } from "react-bootstrap";

export default function StatItem({ detail, count }) {
  return (
    <Col className="bodyitemdetail1">
      {detail} <span className="rowitem2">{count}</span>
    </Col>
  );
}
