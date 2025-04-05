import React, { useState } from "react";
import { peopleFormArray, peopleInitialStates } from "../utils/helper";
import useFormValidation from "../customHooks/useFormValidation";
import employeeSchema from "../validations/peopleManagmentSchema";

const PeopleManagementForm = ({ closeForm }) => {
  console.log(Object.keys(peopleInitialStates).length);
  const {
    countries,
    genders,
    maritalStatus,
    titles,
    relations,
    currency,
    employeeStatus,
    bloodGroup,
    frequencies,
    paymentMethod,
    employementType,
  } = peopleFormArray;
  // const [peopleFormData, setPeopleFormData] = useState(peopleInitialStates);
  const { register, handleSubmit, errors } = useFormValidation(employeeSchema);

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div className="py-4 sm:p-8 bg-white sm:rounded-2xl shadow-lg mt-4 overflow-auto max-h-[60vh]">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="grid grid-cols-1 gap-6 relative"
      >
        <Section title="Personal Information">
          <DropdownInput
            name={"title"}
            label="Title"
            options={titles}
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name={"personalInfoFirstName"}
            label="First Name"
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name={"personalInfoMiddleName"}
            label="Middle Name"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name={"personalInfoLastName"}
            label="Last Name"
            required
            register={register}
            errors={errors}
          />
          <DropdownInput
            name={"personalInfoGender"}
            label="Gender"
            options={genders}
            register={register}
            errors={errors}
            required
          />
          <DropdownInput
            label="Marital Status"
            name={"personalInfoMaritalStatus"}
            options={maritalStatus}
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelDateInput
            name={"personalInfoMaritalSince"}
            label="Marital Status Since"
            register={register}
            errors={errors}
          />
          <DropdownInput
            name={"employeeWorkCountry"}
            label="Employee Work Country"
            options={countries}
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name={"citizenship1"}
            label="Citizenship1"
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name={"citizenship2"}
            label="Citizenship2"
            register={register}
            errors={errors}
            required
          />
        </Section>
        <Section title="Biographical Information">
          <FloatingLabelDateInput
            name="dobBiographicalInfo"
            register={register}
            errors={errors}
            label="Date of Birth"
            required
          />
          <DropdownInput
            label="Country of Birth"
            options={countries}
            name="countryOfBirthBiographicalInfo"
            register={register}
            errors={errors}
            required
          />
          <DropdownInput
            name="bloodGroup"
            register={register}
            options={bloodGroup}
            errors={errors}
            label="Blood Group"
          />
          <FloatingLabelInput
            name="corporateUserID"
            register={register}
            errors={errors}
            label="Corporate User ID"
          />
          {/*"Auto generated."*/}
        </Section>
        <Section title="ID Information">
          <FloatingLabelInput
            name="adharNumber"
            type={"number"}
            label="Aadhar Number"
            register={register}
            errors={errors}
            required
          />
          <FileInput
            name="attachment1IDInfo"
            label="Attachment"
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name="nameAsperNationalId"
            label="Name as per National ID"
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name="permanantAccountNumber"
            label="Permanent Account Number"
            register={register}
            errors={errors}
            required
          />
          <FileInput
            name="attachment2IDInfo"
            label="Attachment"
            accept="image/*"
            register={register}
            errors={errors}
            required
          />
        </Section>
        <Section title="Contact Information">
          <FileInput
            name="attachmentContact"
            label="Attachment"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="bussinessEmail"
            label="Business Email"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="bussinessMobile"
            label="Business Mobile"
            register={register}
            errors={errors}
            type={"number"}
          />
          <FloatingLabelInput
            name="personalModile"
            label="Personal Mobile"
            register={register}
            errors={errors}
            type={"number"}
          />
        </Section>
        <Section title="Emergencyṣ Contact">
          <FloatingLabelInput
            name="nameEmergencysContact"
            label="Name"
            register={register}
            errors={errors}
            required
          />
          <DropdownInput
            name="relationsEmergencysContact"
            label={"Relations"}
            register={register}
            errors={errors}
            options={relations}
            required
          />
          <FloatingLabelInput
            name="phoneNumberEmergencysContact"
            label="Phone Number"
            register={register}
            errors={errors}
            type={"number"}
            required
          />
          <FloatingLabelInput
            name="emailAddressEmergencysContact"
            label="Email Address"
            register={register}
            errors={errors}
          />
        </Section>
        <Section title="Address Information">
          <FloatingLabelInput
            name="homeAddress"
            label="Home Address"
            register={register}
            errors={errors}
            required
          />
          <FileInput
            name="attachment1AddressInfo"
            label={"Attachment"}
            register={register}
            errors={errors}
            accept="image/*"
            required
          />
          <FloatingLabelInput
            name="mailPortalAddress"
            label="Mailing portal Address"
            register={register}
            errors={errors}
            required
          />
          <FileInput
            name="attachment2AddressInfo"
            label="Attachment"
            register={register}
            errors={errors}
            accept="image/*"
            required
          />
        </Section>
        <Section title="Dependents Information">
          <FloatingLabelInput
            name="firstNameDependentsInfo"
            register={register}
            errors={errors}
            label="First Name"
            required
          />
          <FloatingLabelInput
            name="middleNameDependentsInfo"
            register={register}
            errors={errors}
            label="Middle Name"
          />
          <FloatingLabelInput
            name="lastNameDependentsInfo"
            register={register}
            errors={errors}
            label="Last Name"
            required
          />
          <FloatingLabelInput
            name="relationship"
            register={register}
            errors={errors}
            label="Relationship"
            required
          />
          <FloatingLabelDateInput
            name="dobDependentsInfo"
            label="Date of birth"
            register={register}
            errors={errors}
            required
          />
          <FileInput
            name="attachmentDependentsInfo"
            register={register}
            errors={errors}
            label="Attachment"
            accept="image/*"
          />
        </Section>
        <Section title="Bank Accounts Information">
          <FloatingLabelInput
            name="jobCountryBAI"
            label="Job Country/Region"
            register={register}
            errors={errors}
            required
          />
          <DropdownInput
            name="paymentMethod"
            label="Payment Method"
            register={register}
            options={paymentMethod}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name="bankCountryRegion"
            label="Bank Country Region"
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name="bankAccountName"
            label="Bank Account Name"
            register={register}
            errors={errors}
            required
          />
          <FloatingLabelInput
            name="bankAccountNumber"
            label="Bank Account Number"
            register={register}
            errors={errors}
            required
          />
          <DropdownInput
            name="currency"
            label="Currency"
            register={register}
            errors={errors}
            options={currency}
            required
          />
          <FloatingLabelInput
            name="IFSCCode"
            label="IFSC Code"
            register={register}
            errors={errors}
            required
          />
          <FileInput
            name="attachmentBAI"
            label="Attachment"
            register={register}
            errors={errors}
            accept="image/*"
            required
          />
        </Section>
        <Section title="Nominations India">
          <DropdownInput
            name="countryNominationsIndia"
            options={countries}
            label="Country"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="beneficiaryName"
            label="Beneficiary Name"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="beneficiaryRelationship"
            label="Beneficiary Relationship"
            register={register}
            errors={errors}
          />
          <FloatingLabelDateInput
            name="beneficiaryDOB"
            label="Beneficiary Date of Birth"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="beneficiaryFullAddress"
            label="Benificiary Full Address"
            register={register}
            errors={errors}
          />
        </Section>
        <Section title="Manager Information">
          <FloatingLabelInput
            name="supervisorName"
            label="Supervisor Name"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="empId1"
            label="Emp id"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="performanceReviewerName"
            label="Performance Reviewer Name"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="empId2"
            label="Emp id"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="hrName"
            label="HR Name"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="empId3"
            label="Emp id"
            register={register}
            errors={errors}
          />
        </Section>
        <Section title="Job Information">
          <DropdownInput
            name="employeeStatus"
            label="Employee Status"
            register={register}
            errors={errors}
            options={employeeStatus}
          />
          <FloatingLabelInput
            name="officeLocation"
            register={register}
            errors={errors}
            label="Office Location"
          />
          <FloatingLabelInput
            name="defaultWeeklyHours"
            label="Default Weekly Hours"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="timeZone"
            label="Time Zone"
            register={register}
            errors={errors}
          />
          <FileInput
            name="attachmentJobInfo"
            label="Attachment"
            accept={"image/*"}
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="countryJobInfo"
            label="Country/Region"
            register={register}
            errors={errors}
          />
          <FloatingLabelDateInput
            name="contractEndDate"
            label="Contaract End Date"
            register={register}
            errors={errors}
          />
          <DropdownInput
            name="employeeType"
            label="Employee Type"
            register={register}
            errors={errors}
            options={employementType}
            required
          />
        </Section>
        <Section title="Employment Information">
          <FloatingLabelDateInput
            name="mostRecentHireDate"
            label="Most Recent Hire Date"
            register={register}
            errors={errors}
          />
          <FloatingLabelDateInput
            name="priorServiceDate"
            label="Prior Service Date"
            register={register}
            errors={errors}
          />
          <FloatingLabelDateInput
            name="joiningDate"
            label="Company Start Date FS Joining Date"
            register={register}
            errors={errors}
          />
          <FloatingLabelDateInput
            name="seniorityStartDate"
            label="Seniority Start Date"
            register={register}
            errors={errors}
          />
        </Section>
        <Section title="Compensation Information">
          <FloatingLabelInput
            name="payGroup"
            label="Pay Group"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="npsOpted"
            label="NPS Opted"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="LocalID"
            label="Local ID"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="npsNumber"
            label="NPS Number"
            type={"number"}
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="empPentionSchemeStatus"
            label="Employee Pension Scheme Status"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="providentFundNumber"
            label="Provident Fund Number"
            register={register}
            errors={errors}
            type={"number"}
          />
          <FloatingLabelInput
            name="pentionTrustID"
            register={register}
            errors={errors}
            label="Pention Trust ID"
          />
          <FloatingLabelInput
            name="providentFundTrustID"
            label="Provident Fund Trust ID"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="pentionNumber"
            label="Pension Number"
            register={register}
            errors={errors}
            type={"number"}
          />
          <FloatingLabelInput
            name="uanNo"
            label="UAN No"
            type={"number"}
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="npsEligible"
            label="NPS Eligible"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="esicNo"
            label="ESIC No"
            register={register}
            errors={errors}
            type={"number"}
          />
          <FloatingLabelInput
            name="basicSalaryANN"
            label="Basic Salary ANN"
            register={register}
            errors={errors}
          />
          <DropdownInput
            name="FrequencyCI"
            label="Frequency"
            register={register}
            errors={errors}
            options={frequencies}
          />
          <FloatingLabelInput
            name="commentsCI"
            label="Comments"
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="numberCI"
            label="Number"
            type={"number"}
            register={register}
            errors={errors}
          />
          <FloatingLabelInput
            name="unitOfMeasure"
            label="Unit of Measure"
            register={register}
            errors={errors}
          />
          <FloatingLabelDateInput
            name="effectiveStartDate"
            label="Effective Start Date"
            register={register}
            errors={errors}
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
  name,
  register,
  errors,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <input
        type={type || "text"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...register(name)}
        className={`peer w-full border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-sm px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900`}
      />
      <label
        className={`absolute left-4 text-gray-500 transition-all duration-300  ${
          isFocused ? "text-xs -top-2 bg-gray-100 px-1" : "top-3"
        }`}
      >
        {label} {required && " *"}
      </label>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

const FloatingLabelDateInput = ({
  label,
  name,
  register,
  errors,
  required,
}) => {
  return (
    <div className="relative">
      <input
        type="date"
        {...register(name)}
        className={`peer w-full border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-sm px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900`}
      />
      <label className="absolute left-4 text-gray-500 text-xs transition-all -top-3 bg-gray-100 p-1">
        {label} {required && " *"}
      </label>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

const FileInput = ({ label, name, register, errors, required }) => {
  return (
    <div className="relative border border-gray-300 rounded-sm p-2">
      <label className="text-gray-500 absolute bg-gray-100 -top-2 px-1 text-xs">
        {label} {required && " *"}
      </label>
      <input type="file" {...register(name)} className="w-full mt-2" />
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

const DropdownInput = ({
  label,
  options,
  name,
  register,
  errors,
  required,
}) => {
  return (
    <div className="relative">
      <select
        {...register(name)}
        className={`w-full border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-sm px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900`}
      >
        <option disabled selected value="">
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label className="absolute left-4 text-gray-500 text-xs bg-gray-100 px-1 -top-2">
        {label} {required && " *"}
      </label>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

export default PeopleManagementForm;
