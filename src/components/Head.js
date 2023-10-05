import React from "react";
import hamburger from "../assets/hamburger.png";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import searchIcon from "../assets/searchicon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-5 m-2 shadow-lg">
      <div className="flex col-span-1 gap-3 cursor-pointer">
        <img
          className="h-8"
          src={hamburger}
          alt=""
          onClick={toggleMenuHandler}
        />
        <img className="h-8" src={logo} alt="" />
      </div>
      <div className="col-span-10 text-center flex gap-0">
        <input
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-xl"
        />
        <button className="border border-gray-200 rounded-r-xl px-5 py-2 bg-gray-100">
          <img src={searchIcon} alt="searchIcon" className="h-5 " />
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" src={user} alt="User" />
      </div>
    </div>
  );
};

export default Head;
