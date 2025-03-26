import React from "react";

const IntranetDashboard = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-2 md:gap-4">
      <div className="shadow-md shadow-gray-600 p-4 flex-1">
        <h2 className="text-2xl">Order & Request</h2>
        <p className="text-sm tracking-tighter">
          Start here to order softwere or request any item, or browse{" "}
          <span className="text-blue-300">Premium Services</span>
        </p>
        <button className="bg-blue-600 text-white rounded-3xl mt-6 px-8 py-2 mx-auto block">
          Order
        </button>
        <div className="border-b border-gray-300 mt-6 mb-6"></div>
        <h2 className="text-2xl">My Order & Request Status</h2>
        <div className="flex font-semibold gap-4 mt-4">
          <div className="bg-gray-100 text-center text-3xl flex-1 py-4">
            <p>0</p>
            <p className="font-normal text-lg">In Progress</p>
          </div>
          <div className="bg-gray-100 text-center text-3xl flex-1 py-4">
            <p>0</p>
            <p className="font-normal text-lg">Waiting Approval</p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between">
          <div className="border-b border-gray-500 w-[70%]"></div>
          <button className="px-4 py-1 border-[2px] border-blue-700 text-blue-600">
            View All
          </button>
        </div>
      </div>
      <div className="shadow-md shadow-gray-600 p-4 flex-1">
        <h2 className="text-2xl">Report an Issue</h2>
        <p className="text-sm tracking-tighter">
          Start here to request support for any trouble with your computer or
          other equipment.{" "}
        </p>
        <button className="bg-blue-600 cursor-pointer text-white rounded-3xl mt-6 px-8 py-2 mx-auto block">
          Report
        </button>
        <div className="border-b border-gray-300 mt-6 mb-6"></div>
        <h2 className="text-2xl">My Order & Request Status</h2>
        <div className="flex font-semibold gap-4 mt-4">
          <div className="bg-yellow-100  text-center text-3xl flex-1 py-4">
            <p>1</p>
            <p className="font-normal text-lg">In Progress</p>
          </div>
          <div className="bg-yellow-500 text-center text-3xl flex-1 py-4">
            <p>1</p>
            <p className="font-normal text-lg">Feedback Req.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between">
          <div className="border-b border-gray-500 w-[70%]"></div>
          <button className="px-4 py-1 border-[2px] border-blue-700 text-blue-600">
            View All
          </button>
        </div>
      </div>
      <div className="shadow-md shadow-gray-600 p-4 flex-1">
        <h2 className="text-2xl">Other Request</h2>
        <p className="text-sm tracking-tighter">
          Start here for other populer requests.{" "}
        </p>
        <div className="border-b border-gray-300 mt-6 mb-4"></div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <ul className="space-y-1">
            <li className="text-blue-500">Capgemini University</li>
            <li className="text-blue-500">Global Functions</li>
            <li className="text-blue-500">SBUs, GBLs abd MUs</li>
          </ul>
          <ul>
            <li className="text-blue-500">Flexible Working Request</li>
            <li className="text-blue-500">ISS Ticketing System</li>
          </ul>
        </div>
        <div className="border-b border-gray-300 mt-4 mb-4"></div>
        <h2 className="text-2xl">My Items</h2>
        <div className="flex font-semibold gap-4 mt-2 justify-between text-blue-500">
          <p>Items</p>
          <p>Invoice</p>
          <p>Security Items</p>
        </div>
        <div className="border-b border-gray-300 mt-6 mb-4"></div>
        <div>
          <h2 className="text-2xl">Actions</h2>
          <div className="flex items-center space-x-2 text-blue-500">
            <p>My Approvals </p>
            <div className="h-6 w-6 text-white bg-blue-500 flex items-center justify-center rounded-full">
              1
            </div>
          </div>
          <div className="flex items-center space-x-2 text-blue-500">
            <p>'Project Code' is closed or pending close</p>
            <div className="h-6 w-6 text-white bg-blue-500 flex items-center justify-center rounded-full">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntranetDashboard;
