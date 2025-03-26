import React, { useState } from "react";

const PeopleManagementForm = ({ closeForm }) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg mt-4">
      <form className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="space-y-8">
          <FloatingLabelInput label="User ID" required />
          <FloatingLabelInput label="Employee ID" required />
          <FloatingLabelInput label="Account" required />
        </div>

        {/* Column 2 */}
        <div className="space-y-8">
          <FloatingLabelInput label="Extension" required />
          <FloatingLabelInput label="FirstName" required />
          <FloatingLabelInput label="Location" required />
        </div>

        {/* Column 3 */}
        <div className="space-y-8">
          <FloatingLabelInput label="Status" required />
          <FloatingLabelInput label="LastName" required />
          <FloatingLabelInput label="Manager" required />
        </div>

        {/* Column 4 */}
        <div className="space-y-8">
          <FloatingLabelInput label="Comment" required />
          <div></div>
          <div></div>
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-10">
        <button
          onClick={closeForm}
          className="px-6 py-3 bg-gray-300 text-black rounded-xl hover:bg-gray-400"
        >
          Close
        </button>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Save
        </button>
      </div>
    </div>
  );
};

const FloatingLabelInput = ({ label, required }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative ">
      <input
        type="text"
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="peer w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900"
      />
      <label
        className={`absolute left-4 text-gray-500 transition-all duration-300 
          ${isFocused || value ? "text-xs -top-2 bg-white px-1" : "top-3"}
        `}
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
};

export default PeopleManagementForm;
