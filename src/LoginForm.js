import React from "react";

import logo from "./logo.jfif";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

function Login() {
  return (
    <MDBContainer
      style={{ backgroundColor: "#f7f2f2", minHeight: "100vh" }}
      fluid
    >
      <MDBRow>
        <MDBCol md="4" className="mx-auto" style={{ marginTop: "5%" }}>
          <MDBCard>
            <MDBCardBody className="p-0 rounded">
              <div
                className="p-4 "
                style={{
                  height: "150px",
                  backgroundColor: "#6dafbc",
                  objectFit: "scale-down",
                }}
              >
                <img
                  src={logo}
                  className="rounded-circle"
                  alt="..."
                  style={{ width: " 70px", height: "70px" }}
                />
              </div>
              <form className="p-4">
                <p className="h4 ">Sign In</p>
                <div className="grey-text">
                  <MDBInput
                    label="Username"
                    icon="user"
                    group="true"
                    type="text"
                    validate="true"
                    className="my-4"
                    error="wrong"
                    success="right"
                  />

                  <MDBInput
                    label="Password"
                    icon="Lock"
                    group="true"
                    type="email"
                    validate="true"
                    error="wrong"
                    className="my-4"
                    success="right"
                  />
                </div>

                <div className="text-center py-2 mt-3">
                  <MDBBtn
                    color="cyan"
                    className="btn btn-primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Login
                  </MDBBtn>
                </div>

                <a href="#" className="mb-4" style={{ float: "right" }}>
                  Remember my Password
                </a>
                <br />
                <a href="/signup" className="mb-4" style={{ float: "left" }}>
                  Need an Account?
                </a>
                <br />
                <br />

                <h5 className="text-center" style={{ width: "100%" }}>
                  Sign In with
                </h5>

                <div className="text-center p-4">
                  <i className=" m-2  fa-2x  text-primary fab  fa-2x fa-twitter"></i>
                  <i className=" m-2 fa-2x  text-primary fab fa-google"></i>
                  <i className="m-2 fa-2x text-primary fab fa-facebook"></i>
                  <i className="m-2 fa-2x  text-primary fab fa-linkedin"></i>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
