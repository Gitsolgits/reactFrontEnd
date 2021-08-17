import React from "react";
import { Col } from "react-bootstrap";
import "./JobOpening.css";

export default function JobOpening(props) {
  return (
    <Col className="opening">
      <span className="title">{props.title}</span>
      <span className="location">{props.location} </span>
      <span className="info">
        {props.description} <span className="view">View</span>
      </span>
    </Col>
  );
}
