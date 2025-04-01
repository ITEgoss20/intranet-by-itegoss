import React, { useState } from "react";
const PeopleManagementForm = ({ closeForm }) => {
  return (
    <div className="py-4 sm:p-8 bg-white sm:rounded-2xl shadow-lg mt-4 overflow-auto max-h-[60vh]">
      <form className="grid grid-cols-1 gap-6 relative">
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
          <FloatingLabelDateInput label="Date of Birth" required />
          <FloatingLabelInput label="Birth Name" required />
          <FloatingLabelInput label="Country of Birth" required />
          <FloatingLabelInput label="Corporate User ID" required />
        </Section>
        <Section title="ID Information">
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
        <Section title="Emergencyṣ Contact">
          <FloatingLabelInput label="Name" required />
          <FloatingLabelInput
            label="Relations Other (Non Family member)"
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
        <Section title="Address Information">
          <FloatingLabelInput label="Home Address" required />
          <FileInput label={"Attachment"} />
          <FloatingLabelInput label="Mailing portal Address" required />
          <FileInput label="Attachment" required />
        </Section>
        <Section title="Dependents Information">
          <FloatingLabelInput label="First Name" required />
          <FloatingLabelInput label="Middle Name" required />
          <FloatingLabelInput label="Last Name" required />
          <FloatingLabelInput label="Relationship" required />
          <FloatingLabelDateInput label="Date of birth" />
          <FileInput label="Attachment" required />
          <FloatingLabelInput label="First Name" required />
          <FloatingLabelInput label="Middle Name" required />
          <FloatingLabelInput label="Last Name" required />
          <FloatingLabelInput label="Relationship" required />
          <FloatingLabelDateInput label="Date of birth" />
          <FileInput label="Attachment" required />
          <FloatingLabelInput label="First Name" required />
          <FloatingLabelInput label="Middle Name" required />
          <FloatingLabelInput label="Last Name" required />
          <FloatingLabelInput label="Relationship" required />
          <FloatingLabelDateInput label="Date of birth" />
          <FileInput label="Attachment" required />
        </Section>
        <Section title="Bank Accounts Information">
          <FloatingLabelInput label="Job country/region" required />
          <FloatingLabelInput label="Payment Method" required />
          <FloatingLabelInput label="Bank country/Region" required />
          <FloatingLabelInput label="Bank Account Owner" required />
          <FloatingLabelInput label="Bank Account Number" required />
          <FloatingLabelInput label="Currency" required />
          <FloatingLabelInput label="IFSC Code" required />
          <FileInput label="Attachment" />
          <FloatingLabelInput label="Job country/region" required />
          <FloatingLabelInput label="Payment Method" required />
          <FloatingLabelInput label="Bank country/Region" required />
          <FloatingLabelInput label="Bank Account Owner" required />
          <FloatingLabelInput label="Bank Account Number" required />
          <FloatingLabelInput label="Currency" required />
          <FloatingLabelInput label="IFSC Code" required />
          <FileInput label="Attachment_New" />
        </Section>
        <Section title="Nominations India">
          <FloatingLabelInput label="Country" required />
          <FloatingLabelInput label="Beneficiary Name" required />
          <FloatingLabelInput label="Beneficiary Relationship" required />
          <FloatingLabelDateInput label="Beneficiary Date of Birth" required />
          <FloatingLabelInput label="Benificiary Full Address" />
          <FloatingLabelInput label="Guardian" />
          <FloatingLabelInput label="Country" required />
          <FloatingLabelInput label="Beneficiary Name" required />
          <FloatingLabelInput label="Beneficiary Relationship" required />
          <FloatingLabelDateInput label="Beneficiary Date of Birth" required />
          <FloatingLabelInput label="Benificiary Full Address" />
          <FloatingLabelInput label="Guardian" />
          <FloatingLabelInput label="Country" required />
          <FloatingLabelInput label="Beneficiary Name" required />
          <FloatingLabelInput label="Beneficiary Relationship" required />
          <FloatingLabelDateInput label="Beneficiary Date of Birth" required />
          <FloatingLabelInput label="Benificiary Full Address" />
          <FloatingLabelInput label="Guardian" />
          <FloatingLabelInput label="Country" required />
          <FloatingLabelInput label="Beneficiary Name" required />
          <FloatingLabelInput label="Beneficiary Relationship" required />
          <FloatingLabelDateInput label="Beneficiary Date of Birth" required />
          <FloatingLabelInput label="Benificiary Full Address" />
          <FloatingLabelInput label="Guardian" />
        </Section>
        <Section title="Employment Information">
          <FloatingLabelInput label="Position Information" required />
        </Section>
        <Section title="Job Information">
          <FloatingLabelInput label="Employee Status" required />
          <FloatingLabelInput label="Office Location" required />
          <FloatingLabelInput label="Default Weekly Hours" required />
          <FloatingLabelInput label="Time Zone" required />
          <FileInput label="Attachment" />
          <FloatingLabelInput label="Country/Region" required />
          <FloatingLabelInput label="Contaract End Date" required />
        </Section>
        <Section title="Employment Information">
          <FloatingLabelDateInput label="Most Recent Hire Date" />
          <FloatingLabelDateInput label="Prior Service Date" />
          <FloatingLabelDateInput label="Company Start Date FS Joining Date" />
          <FloatingLabelDateInput label="Seniority Start Date" />
        </Section>
        <Section title="Compensation Information">
          <FloatingLabelInput label="Pay Group" required />
          <FloatingLabelInput label="NPS Opted" required />
          <FloatingLabelInput label="Local ID" required />
          <FloatingLabelInput label="NPS Number" required />
          <FloatingLabelInput label="Employee Pension Scheme Status" required />
          <FloatingLabelInput label="Provident Fund Number" required />
          <FloatingLabelInput label="Pention Trust ID" required />
          <FloatingLabelInput label="Provident Fund Trust ID" required />
          <FloatingLabelInput label="Pension Number" required />
          <FloatingLabelInput label="UAN No" required />
          <FloatingLabelInput label="NPS Eligible" required />
          <FloatingLabelInput label="ESIC No" required />
          <FloatingLabelInput label="Basic Salary ANN" required />
          <FloatingLabelInput label="Frequency" required />
          <FloatingLabelInput label="Comments" required />
          <FloatingLabelInput label="Number" required />
          <FloatingLabelInput label="Unit of Measure" required />
          <FloatingLabelDateInput label="Effective Start Date" required />
        </Section>
        <div className="flex justify-end gap-4 px-4 sticky top -bottom-8 py-4 w-full sm:px-4 bg-white">
          <button
            onClick={closeForm}
            className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-gray-300 text-black rounded-md sm:rounded-xl hover:bg-gray-400"
          >
            Close
          </button>
          <button className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-blue-600 text-white rounded-md sm:rounded-xl hover:bg-blue-700">
            Save
          </button>
        </div>
      </form>

      {/* Buttons */}
      {/* <div className="flex justify-end gap-4 mt-10 px-4 sm:px-4 bg-white">
        <button
          onClick={closeForm}
          className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-gray-300 text-black rounded-md sm:rounded-xl hover:bg-gray-400"
        >
          Close
        </button>
        <button className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-blue-600 text-white rounded-md sm:rounded-xl hover:bg-blue-700">
          Save
        </button>
      </div> */}
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

const FloatingLabelDateInput = ({ label, required }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        type="date"
        required={required}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="peer w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-900"
      />
      <label
        className={`absolute left-4 text-gray-500 transition-all -mt-4 bg-gray-100 p-1 duration-300`}
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
