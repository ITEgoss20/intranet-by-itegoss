import React, { useState } from "react";
const PeopleManagementForm = ({ closeForm }) => {
  return (
    <div className="py-4 sm:p-8 bg-white sm:rounded-2xl shadow-lg mt-4 overflow-auto max-h-[60vh]">
      <form className="grid grid-cols-1 gap-6">
        <Section title="Personal Information">
          <FloatingLabelInput label="Salutation" required />
          <FloatingLabelInput label="Legal Gender" required />
          <FloatingLabelInput label="First Name" required />
          <FloatingLabelInput label="Middle Name" required />
          <FloatingLabelInput label="Last Name" required />
          <FloatingLabelInput label="Marital Status Since" required />
          <FloatingLabelInput label="Preferred First Name" required />
          <FloatingLabelInput label="Employee Work Country" required />
          <FloatingLabelInput label="Citizenship1" required />
          <FloatingLabelInput label="Citizenship2" required />
          <FileInput label="Attachment" />
        </Section>

        <Section title="Biographical Information">
          <FloatingLabelInput label="Date of Birth" required />
          <FloatingLabelInput label="Birth Name" required />
          <FloatingLabelInput label="Country of Birth" required />
          <FloatingLabelInput label="Corporate User ID" required />
        </Section>

        <Section title="ID Information">
          <FloatingLabelInput label="National ID Information" required />
          <FloatingLabelInput label="Aadhar Number" required />
          <FileInput label="Attachment" />
          <FloatingLabelInput label="Name as per National ID" required />
          <FloatingLabelInput label="Permanent Account Number" required />
          <FileInput label="Attachment" />
        </Section>
        <Section title="Contact Information">
          <FloatingLabelInput label="Business/Personal Email" required />
          <FloatingLabelInput label="Business Secondary" required />
          <FloatingLabelInput label="Business Mobile" required />
          <FloatingLabelInput label="Personal Mobile" required />
        </Section>
        <Section title={"Emergencyṣ Contact"}>
          <FloatingLabelInput label="Name" required />
          <FloatingLabelInput
            label="Relations Other(Non Family member)"
            required
          />
          <FloatingLabelInput label="Phone Number" required />
          <FloatingLabelInput label="Email Address" required />
          <FloatingLabelInput label="Name" required />
          <FloatingLabelInput
            label="Relations Other(Non Family member)"
            required
          />
          <FloatingLabelInput label="Phone Number" required />
          <FloatingLabelInput label="Email Address" required />
        </Section>
      </form>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-10 px-4 sm:px-4">
        <button
          onClick={closeForm}
          className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-gray-300 text-black rounded-md sm:rounded-xl hover:bg-gray-400"
        >
          Close
        </button>
        <button className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-blue-600 text-white rounded-md smrounded-xl hover:bg-blue-700">
          Save
        </button>
      </div>
    </div>
  );
};
const Section = ({ title, children }) => {
  return (
    <div className="bg-gray-100 p-4 sm:rounded-xl shadow-inner">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
};
const FloatingLabelInput = ({ label, required }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
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
          ${isFocused || value ? "text-xs -top-2 bg-gray-100 px-1" : "top-3"}`}
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
};
const FileInput = ({ label }) => {
  return (
    <div className="relative border border-gray-300 rounded-sm p-3">
      <label className="text-gray-500">{label}</label>
      <input type="file" className="w-full mt-2" />
    </div>
  );
};
export default PeopleManagementForm;
