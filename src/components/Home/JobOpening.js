import React from "react";

export default function JobOpening() {
  return (
    <Col className="bodyitemjobopening">
      <span className="jobopeningcol">{props.title}</span>
      <span className="job-location">Austin,TX </span>
      <span className="jobopeningcol2">
        {props.description} <span className="view">{props.details}</span>
      </span>
    </Col>
  );
}
