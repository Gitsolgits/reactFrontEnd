import React from "react";
import Header from "../Header";
import Search from "./Search";
import Selector from "./Selector";
import Vendor from "./Vendor";
import { Container } from "react-bootstrap";

export default function Vendors() {
  const vendors = [
    {
      name: "Federal Soft System",
      contactPerson: "John Doe",
      location: "Atlanta",
      phone: "123-456-7890",
      email: "abc@fss.com",
      title: "Director",
      recruiter: "TCS",
      bestTimeToReach: "10AM-4PM",
    },
    {
      name: "Bank of West",
      contactPerson: "John Doe",
      location: "Atlanta",
      phone: "123-456-7890",
      email: "abc@fss.com",
      title: "Director",
      recruiter: "TCS",
      bestTimeToReach: "10AM-4PM",
    },
    {
      name: "Bank of West",
      contactPerson: "John Doe",
      location: "Atlanta",
      phone: "123-456-7890",
      email: "abc@fss.com",
      title: "Director",
      recruiter: "TCS",
      bestTimeToReach: "10AM-4PM",
    },
  ];
  return (
    <>
      <Header></Header>
      <Container>
        <div className="jobopening ">
          <div className="mx-4 my-4">
            Job Opening
            <Search />
          </div>

          <Selector />
          {vendors.map((vendor) => (
            <Vendor
              role={vendor.name}
              contactPerson={vendor.contactPerson}
              location={vendor.location}
              phone={vendor.phone}
              email={vendor.email}
              title={vendor.title}
              recruiter={vendor.recruiter}
              bestTimeToReach={vendor.bestTimeToReach}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
