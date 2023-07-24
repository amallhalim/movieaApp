import React from "react";
import { useEffect } from "react";
import axiosInstance from "../Apis/config";
import { useState } from "react";

export default function LangDropDown() {
  const [langlist, setLangList] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("configuration/languages")
      .then(res => {
        setLangList(res.data);
        setIsLoading(false);
        console.log(res.data);
        console.log("langlist", langlist);
      })
      .catch(error => {
        console.log("Error occurred while fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item">Action</p>
          {/* {langlist.map(lang => (
            <li key={lang}>
              <a className="dropdown-item" href="#">
                <i className="flag-poland flag"></i>
                {lang}
              </a>
            </li>
          ))} */}
        </div>
      </div>
    </div>
  );
}
