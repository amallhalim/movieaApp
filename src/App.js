// import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";

import Approuter from "./router/Approuter.js";
import { useContext, useState } from "react";
import LangContext from "./context/language.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

// const App=()=>{

function App() {
  const [lang, setLang] = useState("en");

  // const [lang, setLang] = useContext(LangContext);
  // const [lang2, setLang2] = useContext(LangContext);
  // console.log("lan=====", lang2);
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
