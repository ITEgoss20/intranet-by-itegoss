import React, { useState } from "react";
// import RolePermissionsTable from "./RolePermissionsTable";
import { ChevronDown } from "lucide-react";
import RolePermissionsTable from "./RolePermissionsTable";

const UserRoleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [roleName, setRoleName] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="bg-gray-50 shadow-lg rounded-b-3xl py-8 px-2">
        <h2 className="text-3xl font-semibold">Manage roles</h2>
      </div>
      {/* <ul className="flex items-center mt-4 px-4 border-b border-gray-300 text-gray-600">
        <li className="border-b-[4px] border-blue-900 w-16 text-center py-1.5">
          Roles
        </li>
      </ul> */}
      <div className="px-4 py-6 border border-gray-300 rounded-lg  mx-auto mt-8">
        <div className="bg-gray-50 border-gray-500 py-4 px-8">
          <div className="bg-white">
            <div className="bg-white flex justify-between border border-gray-300 hover:border hover:border-gray-500 rounded-sm">
              <input
                type="text"
                placeholder="Search Role"
                className="w-[90%] py-2 px-4 outline-none"
              />
              <button className="px-6 border-l rounded-r-sm border-gray-400 hover:bg-gray-50 cursor-pointer hover:text-gray-500 text-gray-400 font-semibold">
                Search
              </button>
            </div>
            <button
              onClick={openModal}
              className="cursor-pointer block ml-auto px-4 py-2 bg-green-700 text-white rounded-sm mt-2"
            >
              Add Role
            </button>
          </div>
        </div>
        <RolePermissionsTable
          isOpen={isOpen}
          closeModal={closeModal}
          roleName={roleName}
          setRoleName={setRoleName}
        />
        <div className="border border-gray-200 p-4 mt-4 rounded-xl flex items-center justify-between">
          <p className="text-sm text-gray-700">Showing 1 - 4 of 4</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-700">Row per page</p>
            <div className="relative w-24">
              <select
                className="appearance-none cursor-pointer text-lg outline-none border
                 border-gray-300 rounded-md py-2 px-4 w-full bg-white
                  text-gray-700 "
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleModal;
