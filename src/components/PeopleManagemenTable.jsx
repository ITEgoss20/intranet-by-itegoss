import React from "react";

const rolesData = [
  {
    userId: "U123",
    employeeId: "E456",
    account: "Sales",
    extension: "1234",
    firstName: "John",
    location: "New York",
    status: "Active",
    lastName: "Doe",
    manager: "Jane Smith",
    comment: "Top performer",
  },
  {
    userId: "U124",
    employeeId: "E457",
    account: "Marketing",
    extension: "5678",
    firstName: "Alice",
    location: "Los Angeles",
    status: "Inactive",
    lastName: "Johnson",
    manager: "Bob Brown",
    comment: "On leave",
  },
];

const PeopleManagemenTable = () => {
  return (
    <div className="overflow-auto max-h-[600px] border border-gray-200 rounded-xl mt-4">
      <table className="min-w-[1500px] text-sm">
        <thead className="border-b border-gray-200 bg-gray-50 text-gray-500">
          <tr>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              User ID
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Employee ID
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Account
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Extension
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              First Name
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Location
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Status
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Last Name
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Manager
            </th>
            <th className="px-4 py-3 text-left uppercase font-medium text-[13px]">
              Comment
            </th>
          </tr>
        </thead>
        <tbody>
          {rolesData.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-blue-600 hover:text-white transition-colors border-b border-gray-200"
            >
              <td className="p-4 whitespace-nowrap">{item.userId}</td>
              <td className="p-4 whitespace-nowrap">{item.employeeId}</td>
              <td className="p-4 whitespace-nowrap">{item.account}</td>
              <td className="p-4 whitespace-nowrap">{item.extension}</td>
              <td className="p-4 whitespace-nowrap">{item.firstName}</td>
              <td className="p-4 whitespace-nowrap">{item.location}</td>
              <td className="p-4 whitespace-nowrap">{item.status}</td>
              <td className="p-4 whitespace-nowrap">{item.lastName}</td>
              <td className="p-4 whitespace-nowrap">{item.manager}</td>
              <td className="p-4 whitespace-nowrap">{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleManagemenTable;
