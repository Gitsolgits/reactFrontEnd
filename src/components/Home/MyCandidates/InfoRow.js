import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../common/inforow.css";

export default function InfoRow(props) {
  return (
    <Row>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Title</span>
        <span className="overviewcol1 data">{props.title} </span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Location</span>
        <span className="overviewcol1 data">{props.location} </span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Phone</span>
        <span className="overviewcol1 data">{props.phone}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Email</span>
        <span className="overviewcol1 data">{props.email} </span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Visa</span>
        <span className="overviewcol1 data">{props.visa}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Paty/Salary</span>
        <span className="overviewcol1 data">{props.salary}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Experience</span>
        <span className="overviewcol1 data">{props.experience}</span>
      </Col>
    </Row>
  );
}
