import React, { useState } from "react";
import PeopleManagementForm from "../components/PeopleManagementForm";
import { ChevronDown } from "lucide-react";
import PeopleManagementTable from "../components/PeopleManagemenTable";

const PeopleManagmentPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="px-4">
      <ul className="flex items-center space-x-2 h-12 bg-gradient-to-r from-blue-600 via-blue-600 bg-blue-800 p-2 text-white">
        <li className="cursor-pointer">Uesr Management</li>
        <div>
          <i class="fa fa-angle-right"></i>
          <i class="fa fa-angle-right"></i>
        </div>
        <li className="cursor-pointer">Add User Details</li>
      </ul>
      {/* this need to be changed  */}
      <div className="bg-gray-50 shadow-lg rounded-b-3xl py-8 px-2">
        <h2 className="text-3xl font-semibold">Manage User</h2>
      </div>
      {isFormOpen && <PeopleManagementForm closeForm={closeForm} />}
      <div className="px-4 py-6 border border-gray-300 rounded-lg  mx-auto mt-8">
        <div className="bg-gray-50 border-gray-500 py-4 px-8">
          <div className="bg-white">
            <div className="bg-white flex justify-between border border-gray-300 hover:border hover:border-gray-500 rounded-sm">
              <input
                type="text"
                placeholder="Search User"
                className="w-[90%] py-2 px-4 outline-none"
              />
              <button className="px-6 border-l rounded-r-sm border-gray-400 hover:bg-gray-50 cursor-pointer hover:text-gray-500 text-gray-400 font-semibold">
                Search
              </button>
            </div>
            <button
              onClick={openForm}
              className="cursor-pointer block ml-auto px-4 py-2 bg-green-700 text-white rounded-sm mt-2"
            >
              Add User
            </button>
          </div>
        </div>
        <PeopleManagementTable />
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
export default PeopleManagmentPage;
