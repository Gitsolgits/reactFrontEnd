import React from "react";
import { Col } from "react-bootstrap";

import "./overview.css";

export default function OverviewItem(props) {
  return (
    <Col className="overview">
      <span className="item-count">{props.count}</span>
      <span className="item-type"> {props.type}</span>
    </Col>
  );
}
