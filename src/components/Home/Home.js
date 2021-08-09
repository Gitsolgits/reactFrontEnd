import React from "react";
import Header from "../Header";
import Footer from "../Footer/index";

import Opening from "./Opening.js";
import SearchSec from "./Search.js";
import MyActivities from "./MyActivities";

import Overview from "./Overview";
import MyCandidate from "./MyCandidate";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Header></Header>
      <Container>
        <SearchSec></SearchSec>
        <MyActivities></MyActivities>
        <Overview></Overview>
        <div className="bodyitem2">
          <div className="myjobopening">My Job Openings</div>
          <Opening openings={[{ title: "", description: "" }]}></Opening>
        </div>
        <MyCandidate></MyCandidate>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Home;
