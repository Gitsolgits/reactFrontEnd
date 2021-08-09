import React from 'react'
import { Row,Col,Container } from 'react-bootstrap';
export default function Overview() {
  return (
    <div className="bodyitem1">
        <div className="bodyitemoverview">
          Overview
        </div>
        <Container>
          <Row>
            <Col className="bodyitemoverview1"><span className="overviewcol">888</span><span className="overviewcol1"> OPEN JOBS </span></Col>
            <Col className="bodyitemoverview1"><span className="overviewcol">1132</span><span className="overviewcol1"> SUBMISSIONS </span></Col>
            <Col className="bodyitemoverview1"><span className="overviewcol">203</span><span className="overviewcol1">INTERVIEWS</span> </Col>
            <Col className="bodyitemoverview1"><span className="overviewcol">111</span><span className="overviewcol1"> SHORTLISTED</span> </Col>
            <Col className="bodyitemoverview1"><span className="overviewcol">88</span><span className="overviewcol1">OFFERS</span> </Col>
            <Col className="bodyitemoverview1"><span className="overviewcol">55</span><span className="overviewcol1">PLACED</span> </Col>
          </Row>
        </Container>
      </div>
  )
}
