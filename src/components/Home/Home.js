import React from "react";
import Header from "../Header";
import Footer from "../Footer/index";

import Opening from "./MyJobOpenings/Opening.js";
import SearchSec from "./Search.js";
import MyActivities from "./MyActivities";

import Overview from "./Overview/Overview";
import MyCandidates from "./MyCandidates";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Header></Header>
      <Container>
        <SearchSec></SearchSec>
        <MyActivities></MyActivities>
        <Overview />
        <Opening openings={[{ title: "", description: "" }]}></Opening>
        <MyCandidates />
      </Container>
    </>
  );
}

export default Home;
