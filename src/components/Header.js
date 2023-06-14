import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import LangContext from "../context/language";
import SearchBar from "./SearchBar";
import { increasecounter } from "../store/slices/count";

export default function Header() {
  const { lang, setLang } = useContext(LangContext);
  const favcounter = useSelector(state => state.favcounter.favCount_val);
  // const counter_val = useSelector(state => state.counter.counter_val);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="  row px-5">
          <Navbar.Brand href="/" className="col-2 ">
            MOVIE-APP
          </Navbar.Brand>

          <Nav className="mb-auto col-8 mx-5">
            <span className="bg-primary"> favcounter : {favcounter}</span>
            {/*
            <span className="bg-primary w-50 h-25">
              counter_val: {counter_val}
            </span>
            <span className="bg-primary w-50 h-25">
              favcounter: {favcounter}
            </span>
            <button
              className="mx-5"
              onClick={() => dispatch(increasecounter())}
            >
              increase
  </button> */}

            <NavLink to="movies" className="mx-5">
              Movies
            </NavLink>

            <NavLink
              to="favorites"
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              favorites=
            </NavLink>
            <NavLink to="AboutUs" className="mx-5 ">
              AboutUs ---
            </NavLink>
            <NavLink to="Register" className="mx-5 ">
              Register
            </NavLink>
            <NavLink to="contactus" className="mx-5">
              Contactus
            </NavLink>
          </Nav>

          <div className="col-2 mr-0">
            <p className="bg-secondary">lang: {lang}</p>
            <button
              className="btn btn-success btn-sm"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
            >
              Change lang
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
