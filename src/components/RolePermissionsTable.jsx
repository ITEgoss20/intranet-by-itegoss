import React from "react";
import { X } from "lucide-react";

const rolesData = [
  {
    role: "User",
    permissions: ["Dashboard View", "Profile Edit", "Notifications"],
  },
  {
    role: "Admin",
    permissions: [
      "User Management",
      "Roles Create",
      "Roles Edit",
      "System Settings",
    ],
  },
  {
    role: "Superuser",
    permissions: ["Full Access", "Audit Logs", "Permissions Override"],
  },
  {
    role: "Accounts",
    permissions: [
      "Transaction View",
      "Transaction Download",
      "Settlement View",
      "Settlement Download",
    ],
  },
];

const RolePermissionsTable = ({
  isOpen,
  closeModal,
  roleName,
  setRoleName,
}) => {
  return (
    <div className="overflow-auto max-h-[300px] border border-gray-200 rounded-xl mt-4">
      <table className="min-w-[1160.5px] text-sm">
        <thead className="border-b border-gray-200">
          <tr className="bg-gray-50 text-gray-500">
            <th className="text-left uppercase px-4 py-3 w-1/4 font-medium text-[13px]">
              Role
            </th>
            <th className="text-left uppercase px-4 py-3 font-medium text-[13px]">
              Permissions
            </th>
          </tr>
        </thead>
        <tbody>
          {rolesData.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-blue-600 hover:text-white transition-colors border-b border-gray-200"
            >
              <td className="p-4 whitespace-nowrap">{item.role}</td>
              <td className="p-4">
                <div className="flex flex-wrap gap-1">
                  {item.permissions.map((perm, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 cursor-pointer py-1 rounded-full text-xs"
                    >
                      {perm}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black  flex items-center z-50 justify-center"
          onClick={closeModal}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="bg-white rounded-xl w-full max-w-3xl p-6 relative shadow-lg animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 cursor-pointer right-4 text-gray-600 hover:text-red-600"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold mb-6">Add Role</h2>

            {/* Role Name Input */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Role Name</label>
              <input
                onChange={(e) => setRoleName(e.target.value)}
                type="text"
                placeholder="Enter Role Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Permissions Section */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Account Activation */}
              <div className="flex-1 border-r border-gray-300 pr-4">
                <h3 className="text-lg font-medium mb-3">Account Activation</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="cursor-pointer" /> View
                  Profile Details
                </label>
              </div>

              {/* Analytics */}
              <div className="flex-1 border-r border-gray-300 pr-4">
                <h3 className="text-lg font-medium mb-3">Analytics</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="cursor-pointer" /> View
                  Analytics
                </label>
              </div>

              {/* Approval Flow */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-3">Approval Flow</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer" /> Payment
                    Maker
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer" /> Payment
                    Checker
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer" /> Payment
                    Manage Approval
                  </label>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={closeModal}
                className="bg-gray-300 cursor-pointer text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                disabled={!roleName.trim()}
                className={`px-6 py-2 cursor-pointer rounded-md text-white ${
                  roleName.trim()
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-300 cursor-not-allowed"
                }`}
              >
                Create Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RolePermissionsTable;
