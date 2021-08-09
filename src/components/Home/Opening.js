import React from "react";
import { Col } from "react-bootstrap";
import JobOpening from "./JobOpening";

export default function Opening(props) {
  return (
    <>
      <div className="myjobopeningitem">
        <JobOpening title={props.title} location="" description="" details="" />
        <Col className="bodyitemjobopening">
          <span className="jobopeningcol">{props.title}</span>
          <span className="jobopeningcol1">Austin,TX </span>
          <span className="jobopeningcol2">
            {props.description} <span className="view">{props.details}</span>
          </span>
        </Col>
        <Col className="bodyitemjobopening">
          <span className="jobopeningcol">{props.title}</span>
          <span className="jobopeningcol1">Austin,TX </span>
          <span className="jobopeningcol2">
            {props.description}
            <span className="view">{props.details}</span>{" "}
          </span>{" "}
        </Col>
      </div>
      <div className="myjobopeningitem2">
        <Col className="bodyitemjobopening">
          <span className="jobopeningcol">{props.title}</span>
          <span className="jobopeningcol1">Austin,TX </span>
          <span className="jobopeningcol2">
            {props.description}
            <span className="view">{props.details}</span>
          </span>
        </Col>
        <Col className="bodyitemjobopening">
          <span className="jobopeningcol">{props.title}</span>
          <span className="jobopeningcol1">Austin,TX </span>
          <span className="jobopeningcol2">
            {props.description}
            <span className="view">{props.details}</span>
          </span>
        </Col>
        <Col className="bodyitemjobopening">
          <span className="jobopeningcol">{props.title}</span>
          <span className="jobopeningcol1">Austin,TX </span>
          <span className="jobopeningcol2">
            {props.description}
            <span className="view">{props.details}</span>
          </span>
        </Col>
      </div>
    </>
  );
}
