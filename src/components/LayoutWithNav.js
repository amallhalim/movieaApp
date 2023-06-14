import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function LayoutWithNav() {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Outlet />
      </Container>
    </>
  );
}
