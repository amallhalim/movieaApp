import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Movies from "../pages/Movies";
import Notfound from "../pages/Notfound";
import Register from "../pages/Register";
import Favorites from "../pages/Favorites";
import Contactus from "../pages/Contactus";
import Child from "../pages/Child";
import LayoutWithNav from "../components/LayoutWithNav.js";
import SearchBar from "../components/SearchBar";
import MoviesDetails from "../pages/MoviesDetails";

export default function Approuter() {
  return (
    <Routes>
      <Route element={<LayoutWithNav />}>
        <Route path="/" element={<Movies />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/moviedetails/:id" element={<MoviesDetails />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/contactus" element={<Contactus />}>
          <Route path="Child" element={<Child />} />
          <Route path="Movies" element={<Movies />} />
          {/* in child not use / slash */}
        </Route>
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
