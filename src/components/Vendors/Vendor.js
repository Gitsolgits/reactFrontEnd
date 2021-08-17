import React from "react";
import InfoRow from "./InfoRow";
import Role from "./Role";

export default function Vendor(props) {
  return (
    <>
      <Role title={props.role} selectable={true} skills={props.skills} />
      <InfoRow
        contactPerson={props.contactPerson}
        location={props.location}
        phone={props.phone}
        email={props.email}
        title={props.title}
        recruiter={props.recruiter}
        bestTimeToReach={props.bestTimeToReach}
      ></InfoRow>
    </>
  );
}
