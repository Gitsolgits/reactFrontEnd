import React from "react";
import Title from "../../common/Title";
import JobOpening from "./JobOpening";

export default function Opening(props) {
  return (
    <div className="bodyitem2">
      <Title title="My Job Openings" />
      <div className="myjobopeningitem">
        <JobOpening
          title="Java Developer"
          location="Austin, TX"
          description="6+ months"
        />
        <JobOpening
          title="Java Developer"
          location="Austin, TX"
          description="6+ months"
        />
        <JobOpening
          title="Java Developer"
          location="Austin, TX"
          description="6+ months"
        />
      </div>
      <div className="myjobopeningitem2">
        <JobOpening
          title="Java Developer"
          location="Austin, TX"
          description="6+ months"
        />
        <JobOpening
          title="Java Developer"
          location="Austin, TX"
          description="6+ months"
        />
        <JobOpening
          title="Java Developer"
          location="Austin, TX"
          description="6+ months"
        />
      </div>
    </div>
  );
}
