import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function LayoutWithNav() {
  return (
    <>
      <Header />
      <div className="bg-dark ">
        <Outlet />
      </div>
    </>
  );
}
