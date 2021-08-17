import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../common/Title";
import OverviewItem from "../Overview/OverviewItem";

export default function Overview() {
  return (
    <div className="bodyitem1">
      <Title title="Overview" />
      <Container>
        <Row>
          <OverviewItem count="888" type="Open Jobs" />
          <OverviewItem count="1132" type="SUBMISSIONS" />
          <OverviewItem count="203" type="INTERVIEWS" />
          <OverviewItem count="111" type="SHORTLISTED" />
          <OverviewItem count="88" type="OFFERS" />
          <OverviewItem count="55" type="PLACED" />
        </Row>
      </Container>
    </div>
  );
}
