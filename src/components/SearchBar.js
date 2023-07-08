import React, { useState } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({ senddata }) {
  const [data, setData] = useState("");
  const handelOnchange = e => {
    setData(e.target.value);
    console.log(data);
  };
  const handleSearch = e => {
    senddata(data);
  };
  return (
    <div className=" w-100 bg-dark pb-2  px-5">
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control me-0"
            aria-placeholder="write film name"
            value={data}
            onChange={handelOnchange}
            placeholder="write film name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              type="button"
              className="input-group-text"
              id="basic-addon2 "
              onClick={() => {
                handleSearch();
              }}
            >
              Search
              <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
