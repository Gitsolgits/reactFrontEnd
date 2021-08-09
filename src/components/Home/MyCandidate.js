import React from "react";
import { Row, Col } from "react-bootstrap";
export default function MyCandidate() {
  return (
    <>
      <div className="bodyitem3">
        <div className="mycandidate">My Candidates</div>
        <div>
          <Row className="mycandidateitem1">
            <div>Neil Amber</div>
          </Row>
          <Row className="mycandidateitem1">
            <div>Java,Spring,MongoDB,Microservices,JavaScript</div>
          </Row>
          <Row>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Title</span>
              <span className="overviewcol1">Java Developer </span>
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Location</span>
              <span className="overviewcol1">Austin,Tx </span>
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Phone</span>
              <span className="overviewcol1">(213)245-766</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Email</span>
              <span className="overviewcol1"> abd@gmail.com</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Visa</span>
              <span className="overviewcol1">Citizen</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Paty/Salary</span>
              <span className="overviewcol1">$18/hr</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Experience</span>
              <span className="overviewcol1">10 Years</span>{" "}
            </Col>
          </Row>
        </div>
        <div>
          <Row className="mycandidateitem1">
            <div>James Bond</div>
          </Row>
          <Row className="mycandidateitem1">
            <div>Java,Spring,MongoDB,Microservices,JavaScript</div>
          </Row>
          <Row>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Title</span>
              <span className="overviewcol1">Java Developer </span>
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Location</span>
              <span className="overviewcol1">Austin,Tx </span>
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Phone</span>
              <span className="overviewcol1">(213)245-766</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Email</span>
              <span className="overviewcol1"> abd@gmail.com</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Visa</span>
              <span className="overviewcol1">Citizen</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Paty/Salary</span>
              <span className="overviewcol1">$18/hr</span>{" "}
            </Col>
            <Col className="bodyitemoverview1">
              <span className="overviewcol">Experience</span>
              <span className="overviewcol1">10 Years</span>{" "}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
