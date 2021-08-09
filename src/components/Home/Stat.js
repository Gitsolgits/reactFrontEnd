import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Stat() {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol start>One of three columns</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="6" sm="3" className="col-example">
          .col-6 .col-sm-3
        </MDBCol>

        <MDBCol size="6" sm="3" className="col-example">
          .col-6 .col-sm-3
        </MDBCol>

        <div className="w-100"></div>
        <MDBCol size="6" sm="3" className="col-example">
          .col-6 .col-sm-3
        </MDBCol>
        <MDBCol size="6" sm="3" className="col-example">
          .col-6 .col-sm-3
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
