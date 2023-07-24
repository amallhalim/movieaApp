// import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";

import Approuter from "./router/Approuter.js";
import { useContext, useState } from "react";
import LangContext from "./context/language.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// const App=()=>{

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div
      className={lang === "ar" ? "text-right" : "text-left"}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <LangContext.Provider value={{ lang, setLang }}>
        <BrowserRouter>
          <Approuter />
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  );
}

export default App;
