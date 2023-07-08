import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import LangContext from "../context/language";

import "./Header.css";

export default function Header() {
  const { lang, setLang } = useContext(LangContext);
  const favcounter = useSelector(state => state.favcounter.favCount_val);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-5 = " to="Movies">
          MOVIEAPP
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="  d-flex justify-content-center w-100">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0  ">
              <li className="nav-item active">
                <Link className="nav-link" to="/movies">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  contactus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
              </li>
              <li>
                {" "}
                <button
                  className="btn btn-success btn-sm mx-5"
                  onClick={() => setLang(lang === "en" ? "ar" : "en")}
                >
                  {" "}
                  Change lang
                </button>
              </li>
              <li>
                {" "}
                <span className="bg-primary"> ++{favcounter} ++</span>
              </li>
              <div onClick={() => navigate("./search")} className=" px-5 mt-1">
                <FontAwesomeIcon
                  className=" fs-5 "
                  icon={faMagnifyingGlass}
                  style={{ color: "#d0d7e1" }}
                />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
