import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <>
      <button
        className={`${
          darkMode ? "active" : ""
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsFillSunFill className="w-7 h-7 hover:scale-110" title="Light Mode"/> : <MdDarkMode className="w-7 h-7 hover:scale-110" title="Dark Mode"/>}
      </button>
    </>
  );
}
export default DarkModeToggle;
