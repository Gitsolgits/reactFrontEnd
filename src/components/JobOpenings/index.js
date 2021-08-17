import React from "react";
import Header from "../Header";
import Search from "./Search";
import Selector from "./Selector";
import Opening from "./Opening";
import { Container } from "react-bootstrap";

import "./jobopening.css";
import Title from "../common/Title";

export default function JobOpeningPage() {
  const openings = [
    {
      role: "UI/UX Designer",
      client: "Mixed",
      endClient: "Gray",
      duration: "3 months",
      location: "Atlanta",
      zipCode: "600125",
      recruiter: "Naukri",
      jobId: "1245AD",
      status: "Offered",
      skills: "Designer,UX,UI,Photoshop,Adobe,XD,Figma",
    },
    {
      role: "UI/UX Designer",
      client: "Mixed",
      endClient: "Gray",
      duration: "3 months",
      location: "Atlanta",
      zipCode: "600125",
      recruiter: "Naukri",
      jobId: "1245AD",
      status: "Offered",
      skills: "Designer,UX,UI,Photoshop,Adobe,XD,Figma",
    },
    {
      role: "UI/UX Designer",
      client: "Mixed",
      endClient: "Gray",
      duration: "3 months",
      location: "Atlanta",
      zipCode: "600125",
      recruiter: "Naukri",
      jobId: "1245AD",
      status: "Offered",
      skills: "Designer,UX,UI,Photoshop,Adobe,XD,Figma",
    },
  ];
  return (
    <>
      <Header></Header>
      <Container>
        <div className="jobopening">
          <Title title="Job Opening" />
          <Search />
          <Selector />
          {openings.map((opening) => (
            <Opening
              role={opening.role}
              client={opening.client}
              endClient={opening.endClient}
              duration={opening.duration}
              location={opening.location}
              zipCode={opening.zipCode}
              recruiter={opening.recruiter}
              jobId={opening.jobId}
              status={opening.status}
              skills={opening.skills}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
