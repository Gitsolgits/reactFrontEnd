import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
export default function Search() {
  return (
    <div className="body d-flex">
      <div>Welcome Mr. Ahmad</div>
      <Form className="toright">
        <FormControl
          type="search"
          placeholder="Search here"
          className="mr-2"
          aria-label="Search"
        />
        <Button className="btn" variant="outline-success">
          Search
        </Button>
      </Form>
    </div>
  );
}
