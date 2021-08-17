import React from "react";
import Skills from "../Home/MyCandidates/Skills";
import ActionButton from "../common/ActionButton";
import { Row } from "react-bootstrap";
import "./role.css";

export default function Role({ selectable, title, skills }) {
  return (
    <Row>
      <div className="role">
        <div className="custom-control form-control-lg custom-checkbox">
          <input
            type="checkbox"
            className={
              selectable
                ? "custom-control-input my-2"
                : "custom-control-input my-2 hidden"
            }
            id="select"
          />
          <label className="custom-control-label row-title" for="select">
            {title}
          </label>
        </div>
        <ActionButton value="Add Candidate" className="right" />
        <Skills skills={skills} className="job-skill" />
      </div>
    </Row>
  );
}
