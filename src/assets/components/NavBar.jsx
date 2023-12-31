import React from "react";
import { Input, Space } from "antd";
import { NavLink } from "react-router-dom";
// const { Search } = Input;


const NavBar = () => {
  return (
    <nav className="shadow bg-cyan-600">
      <div className="flex items-center justify-around">
        <img
          className=" h-20 w-20"
          src="https://t3.ftcdn.net/jpg/02/27/79/62/360_F_227796238_au52ZhR96FaJZcSfm64aCjZZ0FQ35DtV.jpg"
          alt="brand logo"
        />
        {/* <div>
          <Search
            name="search"
            placeholder="input search text"
            //   onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div> */}
      </div>
      <div className="Flex flex-col gap-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/marketplace">marketplace</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
