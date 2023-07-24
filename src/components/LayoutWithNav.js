import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function LayoutWithNav() {
  return (
    <>
      <Header className="" />
      <div className="bg-dark mt-5 pt-5 ">
        <Outlet />
      </div>
    </>
  );
}
