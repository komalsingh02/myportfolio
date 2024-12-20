import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

const Nav = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between  items-center h-24  max-w-[1440px] px-4 mx-auto text-white">
      <h1 className="font-bold text-3xl text-[#629584]">React.</h1>
      <ul className=" hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {nav ? <TiThMenu size={40} /> : <MdCancel size={40} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-[-100%]"
            : "fixed top-0 left-0 border-r border-r-gray-300 w-[55%] h-full bg-[#EEEEEE] text-black ease-in-out duration-350"
        }
      >
        <h1 className=" w-full m-4 font-bold text-3xl text-[#629584]">
          React.
        </h1>
        <ul className="pt-10 uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home </li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600"> Resource</li>
          <li className="p-4 border-b border-gray-600">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
