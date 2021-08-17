import React from "react";
import { FormControl, Form, Button } from "react-bootstrap";

export default function Search() {
  return (
    <div className="body d-flex">
      <Form className="toright">
        <FormControl
          type="search"
          placeholder="Search here"
          className="mr-2"
          aria-label="Search"
        />
        <Button className="btn" variant="outline-success">
          +
        </Button>
      </Form>
    </div>
  );
}
