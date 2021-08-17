import React from "react";
import InfoRow from "./InfoRow";
import Role from "./Role";

export default function Opening(props) {
  return (
    <>
      <Role title={props.role} selectable={true} skills={props.skills} />
      <InfoRow
        client={props.client}
        endClient={props.endClient}
        duration={props.duration}
        location={props.location}
        zipCode={props.zipCode}
        recruiter={props.recruiter}
        jobId={props.jobId}
        status={props.status}
      ></InfoRow>
    </>
  );
}
