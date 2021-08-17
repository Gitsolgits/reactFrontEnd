import React from "react";

import CandidateInfo from "./InfoRow";
import CandidateName from "./CandidateName";
import Skills from "./Skills";
import "../../common/inforow.css";

export default function Candidate(props) {
  const { candidateName, skills, info } = props.candidate;

  return (
    <div className="candidate">
      <CandidateName name={candidateName} />
      <Skills skills={skills} />
      <CandidateInfo
        title={info.title}
        location={info.location}
        phone={info.phone}
        email={info.email}
        visa={info.visa}
        salary={info.salary}
        experience={info.experience}
      />
    </div>
  );
}
