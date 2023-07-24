
import axiosInstance from "../Apis/config";
import React, { useContext, useEffect, useState } from "react";


import LangContext from "../context/language";
export default function LangDropDown() {
  const [langlist, setLangList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { lang, setLang } = useContext(LangContext);

  let length = 0;
  useEffect(() => {
    axiosInstance
      .get("configuration/languages")
      .then(res => {
        length = res.data.length;
        setLangList(res.data);
        setIsLoading(false);

      })
      .catch(error => {
        console.log("Error occurred while fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  const handleLanguageChange = event => {
    setLang(event.target.value);
  };
  return (
    <div>
      <div>
        <select className="w-100" value={lang} onChange={handleLanguageChange}>
          {langlist.map((item, index) => (
            <option key={index} value={item.iso_639_1} className="w-100">
              {item.english_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
