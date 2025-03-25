import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link to={"/"}>
          <div className="text-3xl">Logo</div>
        </Link>
        <ul className="flex items-center space-x-8 ml-12">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Group Hub</li>
          <li className="cursor-pointer">Use Full Links</li>
          <li className="cursor-pointer">Profile</li>
          <Link to={"/team-accounts/manage-roles"}>
            <li className="cursor-pointer">Roles</li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col items-center space-x-3">
        <p>Welcome</p>
        <p>Krishna</p>
      </div>
    </header>
  );
};

export default Header;
