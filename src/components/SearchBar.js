import React, { useState } from "react";
import lan from "../utils/languageConstants";
import { useSelector } from "react-redux";
const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center relative">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" relative  bg-black p-3 w-1/2 grid grid-cols-12 "
      >
        <input
          type="text"
          placeholder={lan[langKey].searchPlaceholder}
          className=" col-span-9  px-3 py-2 m-2  text-black focus:focus:outline-none"
        />
        <button className=" bg-red-700 col-span-3 px-3 py-2 m-2 rounded-lg">
          {lan[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
