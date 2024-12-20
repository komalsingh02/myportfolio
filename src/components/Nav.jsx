import React from "react";

const Nav = () => {
  return (
    <div className=" flex justify-between  items-center h-24  max-w-[1440px] px-4 mx-auto text-white">
      <h1 className="font-bold text-3xl text-[#00fd90]">React.</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
      </ul>
    </div>
  );
};

export default Nav;
