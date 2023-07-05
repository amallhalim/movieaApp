import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import LangContext from "../context/language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const { lang, setLang } = useContext(LangContext);
  const favcounter = useSelector(state => state.favcounter.favCount_val);

  const dispatch = useDispatch();
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
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
          </ul>
          <button
            className="btn btn-success btn-sm mx-5"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
          >
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Change lang
          </button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="bg-primary"> ++{favcounter} ++</span>
        </div>
      </nav>
    </>
  );
}
