import React from "react";
import { Row, Container } from "react-bootstrap";
import StatItem from "./StatItem";
import Title from "../common/Title";
export default function MyActivities() {
  return (
    <>
      <div className="bodyitem">
        <Title title="My Activities" />
        <Container>
          <Row>
            <StatItem detail="Role Assigned Today" count="4"></StatItem>
            <StatItem
              detail="Resume submission this week"
              count="12"
            ></StatItem>
          </Row>
          <Row>
            <StatItem detail="client Assigned" count="4"></StatItem>
            <StatItem detail="client Submission" count="12"></StatItem>
          </Row>
          <Row>
            <StatItem detail="High Priority Roles" count="12"></StatItem>
            <StatItem detail="Candidate Offered" count="4"></StatItem>
          </Row>
          <Row>
            <StatItem detail="Week Interviews" count="12"></StatItem>
            <StatItem detail="Candidate Placed" count="4"></StatItem>
          </Row>
        </Container>
      </div>
    </>
  );
}
