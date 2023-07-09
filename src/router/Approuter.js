import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Movies from "../pages/Movies";
import MoviesDetails from "../pages/MoviesDetails";

import Notfound from "../pages/Notfound";
import Register from "../pages/Register";
import Favorites from "../pages/Favorites";
import Contactus from "../pages/Contactus";
import Child from "../pages/Child";
import LayoutWithNav from "../components/LayoutWithNav.js";
// import SeachBar from "../components/SearchBar";
import Searchpage from "../pages/Searchpage";
// import MoviesDetails from "../pages/MoviesDetails";
// const MoviesDetails = React.lazy(() => import("../pages/MoviesDetails"));
// const Child = React.lazy(() => import("../pages/Child"));
// const Contactus = React.lazy(() => import("../pages/Contactus"));
// const Favorites = React.lazy(() => import("../pages/Favorites"));
// const Register = React.lazy(() => import("../pages/Register"));
// const Notfound = React.lazy(() => import("../pages/Notfound"));
// const AboutUs = React.lazy(() => import("../pages/AboutUs"));
// const Movies = React.lazy(() => import("../pages/Movies"));

export default function Approuter() {
  return (
    <Routes>
      <Route element={<LayoutWithNav />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Movies />
            </Suspense>
          }
        />

        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/moviedetails/:id" element={<MoviesDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<login />} />

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
