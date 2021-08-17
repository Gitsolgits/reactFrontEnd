import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "../../common/Title";
import Candidate from "./Candidate";

export default function MyCandidates() {
  const candidates = [
    {
      candidateName: "Neil Amber",
      skills: "Java, Spring, MongoDB, Microservices, JavaScript",
      info: {
        title: "Java Developer",
        location: "Austin, TX",
        phone: "(213)245-766",
        email: "abd@gmail.com",
        visa: "H1B1",
        salary: "$18/hr",
        experience: "10 Years",
      },
    },
    {
      candidateName: "James Bond",
      skills: "Java, Spring, MongoDB, Microservices, JavaScript",
      info: {
        title: "Java Developer",
        location: "Austin, TX",
        phone: "(213)245-766",
        email: "abd@gmail.com",
        visa: "H1B1",
        salary: "$18/hr",
        experience: "13 Years",
      },
    },
  ];
  return (
    <>
      <div className="bodyitem3">
        <Title title="Candidate" />
        {candidates.map((candidate) => (
          <Candidate candidate={candidate} />
        ))}
      </div>
    </>
  );
}
