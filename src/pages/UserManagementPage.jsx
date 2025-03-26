import React from "react";
import UserRoleModal from "../components/UserRoleModal";

const UserManagementPage = () => {
  return (
    <div className="px-4">
      <ul className="flex items-center space-x-2 h-12 bg-gradient-to-r from-blue-600 via-blue-600 bg-blue-800 p-2 text-white">
        <li className="cursor-pointer">Uesr Module</li>
        <div>
          <i class="fa fa-angle-right"></i>
          <i class="fa fa-angle-right"></i>
        </div>
        <li className="cursor-pointer">Uesr Management</li>
      </ul>
      <UserRoleModal />
    </div>
  );
};

export default UserManagementPage;
