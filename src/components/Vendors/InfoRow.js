import React from "react";
import { Row, Col } from "react-bootstrap";
import "../common/inforow.css";

export default function InfoRow(props) {
  return (
    <Row>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Contact Person</span>
        <span className="overviewcol1 data">{props.contactPerson} </span>
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
        <span className="overviewcol header">Title</span>
        <span className="overviewcol1 data">{props.title}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Status</span>
        <span className="overviewcol1 data">{props.recruiter}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Best Time to Reach</span>
        <span className="overviewcol1 data">{props.bestTimeToReach}</span>
      </Col>
    </Row>
  );
}
