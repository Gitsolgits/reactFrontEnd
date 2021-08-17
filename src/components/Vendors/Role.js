import React from "react";
import Skills from "../Home/MyCandidates/Skills";
import ActionButton from "../common/ActionButton";
import { Row } from "react-bootstrap";
import { Download, EnvelopeOpen, Telephone } from "react-bootstrap-icons";

import "./role.css";

export default function Role(props) {
  return (
    <Row>
      <div className="role">
        <div className="custom-control form-control-lg custom-checkbox">
          <input
            type="checkbox"
            className={
              props.selectable
                ? "custom-control-input my-2"
                : "custom-control-input my-2 hidden"
            }
            id="select"
          />
          <label className="custom-control-label row-title" for="customCheck1">
            {props.title}
          </label>
        </div>
        <ActionButton value="Add to Job" className="right" />
        <EnvelopeOpen className="right icon" />
        <Telephone className="right icon" />
        <Download className="right icon" />
        <Skills skills={props.skills} className="job-skill" />
      </div>
    </Row>
  );
}
