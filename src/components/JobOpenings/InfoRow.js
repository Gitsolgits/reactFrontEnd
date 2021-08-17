import React from "react";
import { Row, Col } from "react-bootstrap";
import "../common/inforow.css";

export default function InfoRow(props) {
  return (
    <Row>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Client</span>
        <span className="overviewcol1 data">{props.client} </span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">End Client</span>
        <span className="overviewcol1 data">{props.endClient} </span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Duration</span>
        <span className="overviewcol1 data">{props.duration}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Location</span>
        <span className="overviewcol1 data">{props.location} </span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Zip Code</span>
        <span className="overviewcol1 data">{props.zipCode}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Recruiter</span>
        <span className="overviewcol1 data">{props.recruiter}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Job ID</span>
        <span className="overviewcol1 data">{props.jobId}</span>
      </Col>
      <Col className="bodyitemoverview1">
        <span className="overviewcol header">Status</span>
        <span className="overviewcol1 data">{props.status}</span>
      </Col>
    </Row>
  );
}
