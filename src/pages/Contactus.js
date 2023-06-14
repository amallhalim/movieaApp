import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Favorites() {
  return (
    <div>
      Favorites
      <NavLink to="Child" className="mx-5">
        Child
      </NavLink>
      <NavLink to="Movies" className="mx-5">
        Movies
      </NavLink>
      <Outlet></Outlet>
      {/* here i till it to put child in this part*/}
    </div>
  );
}
