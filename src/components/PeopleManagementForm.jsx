import React, { useState } from "react";
import { peopleFormArray, peopleInitialStates } from "../utils/helper";
const PeopleManagementForm = ({ closeForm }) => {
  const { countries, genders, maritalStatus, titles, relations } =
    peopleFormArray;
  const [peopleFormData, setPeopleFormData] = useState(peopleInitialStates);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPeopleFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // console.log(Object.keys(peopleInitialStates).length);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(peopleFormData);
  };

  return (
    <div className="py-4 sm:p-8 bg-white sm:rounded-2xl shadow-lg mt-4 overflow-auto max-h-[60vh]">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 relative">
        <Section title="Personal Information">
          <DropdownInput
            name={"title"}
            label="Title"
            options={titles}
            onChange={handleInputChange}
            value={peopleFormData.title}
            required
          />
          <FloatingLabelInput
            name={"personalInfoFirstName"}
            label="First Name"
            onChange={handleInputChange}
            value={peopleFormData.personalInfoFirstName}
            required
          />
          <FloatingLabelInput
            name={"personalInfoMiddleName"}
            label="Middle Name"
            onChange={handleInputChange}
            value={peopleFormData.personalInfoMiddleName}
          />
          <FloatingLabelInput
            name={"personalInfoLastName"}
            label="Last Name"
            required
            onChange={handleInputChange}
            value={peopleFormData.personalInfoLastName}
          />
          <DropdownInput
            name={"personalInfoGender"}
            label="Gender"
            options={genders}
            onChange={handleInputChange}
            value={peopleFormData.personalInfoGender}
            required
          />
          <DropdownInput
            label="Marital Status"
            name={"personalInfoMaritalStatus"}
            options={maritalStatus}
            onChange={handleInputChange}
            value={peopleFormData.personalInfoMaritalStatus}
            required
          />
          <FloatingLabelDateInput
            name={"personalInfoMaritalSince"}
            label="Marital Status Since"
            onChange={handleInputChange}
            value={peopleFormData.personalInfoMaritalSince}
          />
          <DropdownInput
            name={"employeeWorkCountry"}
            label="Employee Work Country"
            options={countries}
            onChange={handleInputChange}
            value={peopleFormData.employeeWorkCountry}
            required
          />
          <FloatingLabelInput
            name={"citizenship1"}
            label="Citizenship1"
            onChange={handleInputChange}
            value={peopleFormData.citizenship1}
            required
          />
          <FloatingLabelInput
            name={"citizenship2"}
            label="Citizenship2"
            onChange={handleInputChange}
            value={peopleFormData.citizenship2}
            required
          />
        </Section>
        <Section title="Biographical Information">
          <FloatingLabelDateInput
            name="dobBiographicalInfo"
            onChange={handleInputChange}
            label="Date of Birth"
            value={peopleFormData.dobBiographicalInfo}
            required
          />
          <DropdownInput
            label="Country of Birth"
            options={countries}
            name="countryOfBirthBiographicalInfo"
            value={peopleFormData.countryOfBirthBiographicalInfo}
            onChange={handleInputChange}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="bloodGroup"
            value={peopleFormData.bloodGroup}
            label="Blood Group"
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="corporateUserID"
            label="Corporate User ID"
            value={peopleFormData.corporateUserID}
          />
          {/*"Auto generated."*/}
        </Section>
        <Section title="ID Information">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="adharNumber"
            type={"number"}
            label="Aadhar Number"
            value={peopleFormData.adharNumber}
            required
          />
          <FileInput
            onChange={handleInputChange}
            name="attachment1IDInfo"
            label="Attachment"
            value={peopleFormData.attachment1IDInfo}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="nameAsperNationalId"
            label="Name as per National ID"
            value={peopleFormData.nameAsperNationalId}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="permanantAccountNumber"
            label="Permanent Account Number"
            value={peopleFormData.permanantAccountNumber}
            required
          />
          <FileInput
            onChange={handleInputChange}
            name="attachment2IDInfo"
            label="Attachment"
            accept="image/*"
            value={peopleFormData.attachment2IDInfo}
            required
          />
        </Section>
        <Section title="Contact Information">
          <FileInput
            onChange={handleInputChange}
            name="attachmentContact"
            label="Attachment"
            value={peopleFormData.attachmentContact}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="bussinessEmail"
            label="Business Email"
            value={peopleFormData.bussinessEmail}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="bussinessMobile"
            label="Business Mobile"
            value={peopleFormData.bussinessMobile}
            type={"number"}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="personalModile"
            label="Personal Mobile"
            value={peopleFormData.personalModile}
            type={"number"}
          />
        </Section>
        <Section title="Emergencyṣ Contact">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="nameEmergencysContact"
            label="Name"
            value={peopleFormData.nameEmergencysContact}
            required
          />
          <DropdownInput
            onChange={handleInputChange}
            name="relationsEmergencysContact"
            label={"Relations"}
            value={peopleFormData.relationsEmergencysContact}
            options={relations}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="phoneNumberEmergencysContact"
            label="Phone Number"
            value={peopleFormData.phoneNumberEmergencysContact}
            type={"number"}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="emailAddressEmergencysContact"
            label="Email Address"
            value={peopleFormData.emailAddressEmergencysContact}
          />
        </Section>
        <Section title="Address Information">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="homeAddress"
            label="Home Address"
            value={peopleFormData.homeAddress}
            required
          />
          <FileInput
            onChange={handleInputChange}
            name="attachment1AddressInfo"
            label={"Attachment"}
            value={peopleFormData.attachment1AddressInfo}
            accept="image/*"
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="mailPortalAddress"
            label="Mailing portal Address"
            value={peopleFormData.mailPortalAddress}
            required
          />
          <FileInput
            onChange={handleInputChange}
            name="attachment2AddressInfo"
            label="Attachment"
            value={peopleFormData.attachment2AddressInfo}
            accept="image/*"
            required
          />
        </Section>
        <Section title="Dependents Information">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="firstNameDependentsInfo"
            value={peopleFormData.firstNameDependentsInfo}
            label="First Name"
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="middleNameDependentsInfo"
            value={peopleFormData.middleNameDependentsInfo}
            label="Middle Name"
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="lastNameDependentsInfo"
            value={peopleFormData.lastNameDependentsInfo}
            label="Last Name"
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="relationship"
            value={peopleFormData.relationship}
            label="Relationship"
            required
          />
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="dobDependentsInfo"
            label="Date of birth"
            value={peopleFormData.dobDependentsInfo}
            required
          />
          <FileInput
            onChange={handleInputChange}
            name="attachmentDependentsInfo"
            value={peopleFormData.attachmentDependentsInfo}
            label="Attachment"
            accept="image/*"
          />
        </Section>
        <Section title="Bank Accounts Information">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="jobCountryBAI"
            label="Job Country/Region"
            value={peopleFormData.jobCountryBAI}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="paymentMethod"
            label="Payment Method"
            value={peopleFormData.paymentMethod}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="bankCountryRegion"
            label="Bank Country Region"
            value={peopleFormData.bankCountryRegion}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="bankAccountName"
            label="Bank Account Name"
            value={peopleFormData.bankAccountName}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="bankAccountNumber"
            label="Bank Account Number"
            value={peopleFormData.bankAccountNumber}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="currency"
            label="Currency"
            value={peopleFormData.currency}
            required
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="IFSCCode"
            label="IFSC Code"
            value={peopleFormData.IFSCCode}
            required
          />
          <FileInput
            onChange={handleInputChange}
            name="attachmentBAI"
            label="Attachment"
            value={peopleFormData.attachmentBAI}
            accept="image/*"
            required
          />
        </Section>
        <Section title="Nominations India">
          <DropdownInput
            onChange={handleInputChange}
            name="countryNominationsIndia"
            options={countries}
            label="Country"
            value={peopleFormData.countryNominationsIndia}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="beneficiaryName"
            label="Beneficiary Name"
            value={peopleFormData.beneficiaryName}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="beneficiaryRelationship"
            label="Beneficiary Relationship"
            value={peopleFormData.beneficiaryRelationship}
          />
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="beneficiaryDOB"
            label="Beneficiary Date of Birth"
            value={peopleFormData.beneficiaryDOB}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="beneficiaryFullAddress"
            label="Benificiary Full Address"
            value={peopleFormData.beneficiaryFullAddress}
          />
        </Section>
        <Section title="Manager Information">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="supervisorName"
            label="Supervisor Name"
            value={peopleFormData.supervisorName}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="empId1"
            label="Emp id"
            value={peopleFormData.empId1}
            type={"number"}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="performanceReviewerName"
            label="Performance Reviewer Name"
            value={peopleFormData.performanceReviewerName}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="empId2"
            label="Emp id"
            value={peopleFormData.empId2}
            type={"number"}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="hrName"
            label="HR Name"
            value={peopleFormData.hrName}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="empId3"
            label="Emp id"
            value={peopleFormData.empId3}
            type={"number"}
          />
        </Section>
        <Section title="Job Information">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="employeeStatus"
            label="Employee Status"
            value={peopleFormData.employeeStatus}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="officeLocation"
            value={peopleFormData.officeLocation}
            label="Office Location"
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="defaultWeeklyHours"
            label="Default Weekly Hours"
            value={peopleFormData.defaultWeeklyHours}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="timeZone"
            label="Time Zone"
            value={peopleFormData.timeZone}
          />
          <FileInput
            onChange={handleInputChange}
            name="attachmentJobInfo"
            label="Attachment"
            accept={"image/*"}
            value={peopleFormData.attachmentJobInfo}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="countryJobInfo"
            label="Country/Region"
            value={peopleFormData.countryJobInfo}
          />
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="contractEndDate"
            label="Contaract End Date"
            value={peopleFormData.contractEndDate}
          />
        </Section>
        <Section title="Employment Information">
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="mostRecentHireDate"
            label="Most Recent Hire Date"
            value={peopleFormData.mostRecentHireDate}
          />
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="priorServiceDate"
            label="Prior Service Date"
            value={peopleFormData.priorServiceDate}
          />
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="joiningDate"
            label="Company Start Date FS Joining Date"
            value={peopleFormData.joiningDate}
          />
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="seniorityStartDate"
            label="Seniority Start Date"
            value={peopleFormData.seniorityStartDate}
          />
        </Section>
        <Section title="Compensation Information">
          <FloatingLabelInput
            onChange={handleInputChange}
            name="payGroup"
            label="Pay Group"
            value={peopleFormData.payGroup}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="npsOpted"
            label="NPS Opted"
            value={peopleFormData.npsOpted}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="LocalID"
            label="Local ID"
            value={peopleFormData.LocalID}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="npsNumber"
            label="NPS Number"
            type={"number"}
            value={peopleFormData.npsNumber}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="empPentionSchemeStatus"
            label="Employee Pension Scheme Status"
            value={peopleFormData.empPentionSchemeStatus}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="providentFundNumber"
            label="Provident Fund Number"
            value={peopleFormData.providentFundNumber}
            type={"number"}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="pentionTrustID"
            value={peopleFormData.pentionTrustID}
            label="Pention Trust ID"
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="providentFundTrustID"
            label="Provident Fund Trust ID"
            value={peopleFormData.providentFundTrustID}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="pentionNumber"
            label="Pension Number"
            value={peopleFormData.pentionNumber}
            type={"number"}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="uanNo"
            label="UAN No"
            type={"number"}
            value={peopleFormData.uanNo}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="npsEligible"
            label="NPS Eligible"
            value={peopleFormData.npsEligible}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="esicNo"
            label="ESIC No"
            value={peopleFormData.esicNo}
            type={"number"}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="basicSalaryANN"
            label="Basic Salary ANN"
            value={peopleFormData.basicSalaryANN}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="FrequencyCI"
            label="Frequency"
            value={peopleFormData.FrequencyCI}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="commentsCI"
            label="Comments"
            value={peopleFormData.commentsCI}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="numberCI"
            label="Number"
            type={"number"}
            value={peopleFormData.numberCI}
          />
          <FloatingLabelInput
            onChange={handleInputChange}
            name="unitOfMeasure"
            label="Unit of Measure"
            value={peopleFormData.unitOfMeasure}
          />
          <FloatingLabelDateInput
            onChange={handleInputChange}
            name="effectiveStartDate"
            label="Effective Start Date"
            value={peopleFormData.effectiveStartDate}
          />
        </Section>
        <div className="flex justify-end gap-4 px-4 sticky top -bottom-8 py-4 w-full sm:px-4 bg-white">
          <button
            onClick={closeForm}
            className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-gray-300 text-black rounded-md sm:rounded-xl hover:bg-gray-400"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 sm:px-6 sm:py-3 cursor-pointer bg-blue-600 text-white rounded-md sm:rounded-xl hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
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
const FloatingLabelInput = ({
  label,
  required,
  type,
  onChange,
  value,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <input
        type={type ? type : "text"}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
        name={name}
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
const FloatingLabelDateInput = ({ label, name, required, onChange, value }) => {
  return (
    <div className="relative">
      <input
        type="date"
        name={name}
        required={required}
        onChange={onChange}
        value={value}
        className="peer w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900"
      />
      <label
        className={`absolute left-4 text-gray-500 text-xs transition-all -top-3 bg-gray-100 p-1 duration-300`}
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
};
const FileInput = ({ label, required, name, value, onChange }) => {
  return (
    <div className="relative border border-gray-300 rounded-sm p-3">
      <label className="text-gray-500 absolute bg-gray-100 -top-2 px-1 text-xs">
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        onChange={onChange}
        type="file"
        value={value}
        className="w-full mt-2"
      />
    </div>
  );
};
const DropdownInput = ({ label, options, name, required, value, onChange }) => {
  return (
    <div className="relative">
      <select
        name={name}
        onChange={onChange}
        required={required}
        value={value}
        className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900"
      >
        <option value="" disabled selected>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label className="absolute left-4 text-gray-500 text-xs bg-gray-100 transition-all px-1 duration-300 -top-2">
        {label}
        {required && " *"}
      </label>
    </div>
  );
};
export default PeopleManagementForm;
