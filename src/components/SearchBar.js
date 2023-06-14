import React, { useState } from "react";

export default function SearchBar() {
  const [data, setData] = useState("");
  const handelOnchange = e => {
    setData(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="  bg-dark ">
      <label className="form-label red" for="form1">
        Search
      </label>
      <input
        type="text"
        value={data}
        onchange={handelOnchange}
        className=" conatainer w-50  form-control "
      ></input>
      <button> ser</button>
    </div>
  );
}
