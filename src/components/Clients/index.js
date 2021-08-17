import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import ClientSelectall from './ClientSelectall';
import Clientsearch from './Clientsearch';
import ClientComponent from './ClientComponent';
import { Form, FormControl, Button, Badge, Container, Row, Col } from 'react-bootstrap';
export default function Clients() {
  return (
    <>
      <Header></Header>
      <div>
      <div className=" vendors mx-4 my-4">Client Page</div>
      </div>
      <Clientsearch></Clientsearch>
      <ClientSelectall></ClientSelectall>
      <ClientComponent title='Bank Of West'></ClientComponent>
      <ClientComponent title='Bank Of West'></ClientComponent>
      <ClientComponent title='Bank Of West'></ClientComponent>
      <Footer></Footer>
      
    </>
  )
}
