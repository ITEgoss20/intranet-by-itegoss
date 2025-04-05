import * as Yup from "yup";

const employeeSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  personalInfoFirstName: Yup.string().trim().required("First Name is required"),
  personalInfoMiddleName: Yup.string().trim(), // Optional
  personalInfoLastName: Yup.string().trim().required("Last Name is required"),
  personalInfoGender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid gender selection")
    .required("Gender is required"),
  personalInfoMaritalStatus: Yup.string()
    .oneOf(
      ["Single", "Married", "Divorced", "Widowed"],
      "Invalid Marital Status"
    )
    .required("Marital Status is required"),
  personalInfoMaritalSince: Yup.date()
    .nullable()
    .when("maritalStatus", {
      is: (status) => status && status !== "Single",
      then: (schema) =>
        schema.required("Marital Status Since is required when not single"),
      otherwise: (schema) => schema.notRequired(),
    }),
  employeeWorkCountry: Yup.string().required(
    "Employee Work Country is required"
  ),
  citizenship1: Yup.string().required("Primary Citizenship is required"),
  citizenship2: Yup.string()
    .notOneOf(
      [Yup.ref("citizenship1")],
      "Citizenship 2 must be different from Citizenship 1"
    )
    .required("Secondary Citizenship is required"),

  dobBiographicalInfo: Yup.date()
    .typeError("Date of Birth must be a valid date")
    .required("Date of Birth is required"),

  countryOfBirthBiographicalInfo: Yup.string().required(
    "Country of Birth is required"
  ),

  bloodGroup: Yup.string()
    .oneOf(
      ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      "Invalid Blood Group"
    )
    .required("Blood Group is required"),

  corporateUserID: Yup.string()
    .matches(
      /^EMP\d{4,}$/,
      "Corporate User ID must be auto-generated and start with EMP"
    )
    .required("Corporate User ID is required"),

  adharNumber: Yup.string()
    .matches(/^\d{12}$/, "Aadhar Number must be a 12-digit numeric value")
    .required("Aadhar Number is required"),

  attachment1IDInfo: Yup.mixed().required("Attachment 1 is required"),

  nameAsperNationalId: Yup.string()
    .trim()
    .required("Name as per National ID is required"),

  permanantAccountNumber: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
    .required("Permanent Account Number is required"),

  attachment2IDInfo: Yup.mixed().required("Attachment 2 is required"),

  attachmentContact: Yup.mixed().nullable(), // Optional

  bussinessEmail: Yup.string()
    .email("Invalid business email format")
    .nullable(), // Optional

  bussinessMobile: Yup.string()
    .matches(/^\d{10}$/, "Business Mobile must be a 10-digit number")
    .nullable(), // Optional

  personalModile: Yup.string()
    .matches(/^\d{10}$/, "Personal Mobile must be a 10-digit number")
    .nullable(), // Optional

  nameEmergencysContact: Yup.string()
    .trim()
    .required("Emergency Contact Name is required"),

  relationsEmergencysContact: Yup.string()
    .trim()
    .required("Relationship with Emergency Contact is required"),

  phoneNumberEmergencysContact: Yup.string()
    .matches(
      /^\d{10}$/,
      "Emergency Contact Phone Number must be a 10-digit number"
    )
    .required("Emergency Contact Phone Number is required"),

  emailAddressEmergencysContact: Yup.string()
    .email("Invalid Emergency Contact Email format")
    .nullable(), // Optional

  homeAddress: Yup.string().trim().required("Home Address is required"),

  attachment1AddressInfo: Yup.mixed().required(
    "Attachment 1 for Address is required"
  ),

  mailPortalAddress: Yup.string()
    .trim()
    .required("Mail Portal Address is required"),

  attachment2AddressInfo: Yup.mixed().required(
    "Attachment 2 for Address is required"
  ),

  firstNameDependentsInfo: Yup.string()
    .trim()
    .required("Dependent's First Name is required"),

  middleNameDependentsInfo: Yup.string().trim(), // Optional

  lastNameDependentsInfo: Yup.string()
    .trim()
    .required("Dependent's Last Name is required"),

  relationship: Yup.string().required(
    "Relationship with Dependent is required"
  ),

  dobDependentsInfo: Yup.date()
    .typeError("Date of Birth must be a valid date")
    .required("Dependent's Date of Birth is required"),

  attachmentDependentsInfo: Yup.mixed().nullable(), // Optional

  jobCountryBAI: Yup.string().required("Job Country is required"),

  paymentMethod: Yup.string()
    .oneOf(["Bank Transfer", "Cheque", "Cash"], "Invalid Payment Method")
    .required("Payment Method is required"),

  bankCountryRegion: Yup.string().required("Bank Country/Region is required"),

  bankAccountName: Yup.string()
    .trim()
    .required("Bank Account Name is required"),

  bankAccountNumber: Yup.string()
    .matches(/^\d{8,18}$/, "Bank Account Number must be between 8-18 digits")
    .required("Bank Account Number is required"),

  currency: Yup.string()
    .oneOf(["USD", "INR", "EUR", "GBP", "AUD"], "Invalid Currency")
    .required("Currency is required"),

  IFSCCode: Yup.string()
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code format")
    .required("IFSC Code is required"),

  attachmentBAI: Yup.mixed().required("Bank Account Attachment is required"),

  countryNominationsIndia: Yup.string()
    .nullable()
    .when("beneficiaryName", {
      is: (value) => value && value.trim() !== "",
      then: (schema) => schema.required("Country for nomination is required"),
      otherwise: (schema) => schema.notRequired(),
    }),

  beneficiaryName: Yup.string().trim().required("Beneficiary Name is required"),

  beneficiaryRelationship: Yup.string()
    .trim()
    .required("Beneficiary Relationship is required"),

  beneficiaryDOB: Yup.date()
    .typeError("Beneficiary Date of Birth must be a valid date")
    .required("Beneficiary Date of Birth is required"),

  beneficiaryFullAddress: Yup.string().trim().nullable(), // Optional, since addresses may change

  supervisorName: Yup.string().trim().required("Supervisor Name is required"),

  empId1: Yup.string()
    .matches(/^EMP\d{4,}$/, "Supervisor Employee ID must be valid")
    .required("Supervisor Employee ID is required"),

  performanceReviewerName: Yup.string()
    .trim()
    .required("Performance Reviewer Name is required"),

  empId2: Yup.string()
    .matches(/^EMP\d{4,}$/, "Performance Reviewer Employee ID must be valid")
    .required("Performance Reviewer Employee ID is required"),

  hrName: Yup.string().trim().required("HR Name is required"),

  empId3: Yup.string()
    .matches(/^EMP\d{4,}$/, "HR Employee ID must be valid")
    .required("HR Employee ID is required"),

  employeeStatus: Yup.string()
    .oneOf(
      ["Active", "On Leave", "Terminated", "Resigned"],
      "Invalid Employee Status"
    )
    .required("Employee Status is required"),

  officeLocation: Yup.string().trim().required("Office Location is required"),

  defaultWeeklyHours: Yup.number()
    .typeError("Default Weekly Hours must be a number")
    .min(1, "Weekly Hours must be at least 1 hour")
    .max(168, "Weekly Hours cannot exceed 168 hours")
    .required("Default Weekly Hours is required"),

  timeZone: Yup.string().trim().required("Time Zone is required"),

  attachmentJobInfo: Yup.mixed().required(
    "Job Information Attachment is required"
  ),

  countryJobInfo: Yup.string()
    .trim()
    .required("Country of Job Information is required"),

  contractEndDate: Yup.date()
    .nullable()
    .when("employeeStatus", {
      is: "Contract", // Only required if employee is a contract worker
      then: (schema) =>
        schema.required("Contract End Date is required for contract employees"),
      otherwise: (schema) => schema.notRequired(),
    }),

  mostRecentHireDate: Yup.date()
    .typeError("Most Recent Hire Date must be a valid date")
    .required("Most Recent Hire Date is required"),

  employeeType: Yup.string()
    .oneOf(
      ["full time", "Part-Time", "Consultant", "Volunteer"],
      "Invalid Employee Type"
    )
    .required("Employee Type is required"),

  priorServiceDate: Yup.date()
    .typeError("Prior Service Date must be a valid date")
    .nullable(), // Optional, as it applies only to rehired employees

  joiningDate: Yup.date()
    .typeError("Joining Date must be a valid date")
    .required("Joining Date is required"),

  seniorityStartDate: Yup.date()
    .typeError("Seniority Start Date must be a valid date")
    .nullable(), // Optional, used only in certain companies

  payGroup: Yup.string().trim().required("Pay Group is required"),

  npsOpted: Yup.boolean().required("NPS Opted is required"),

  LocalID: Yup.string().nullable(), // Optional, used for internal tracking

  npsNumber: Yup.string()
    .nullable()
    .when("npsOpted", {
      is: true,
      then: (schema) => schema.required("NPS Number is required if opted"),
      otherwise: (schema) => schema.notRequired(),
    }),

  empPentionSchemeStatus: Yup.string()
    .trim()
    .required("Employee Pension Scheme Status is required"),

  providentFundNumber: Yup.string()
    .trim()
    .required("Provident Fund Number is required"),

  pentionTrustID: Yup.string().nullable(), // Only for private pension trusts

  providentFundTrustID: Yup.string().nullable(), // Only for private PF trusts

  pentionNumber: Yup.string().nullable(), // Optional as not all employees have it

  uanNo: Yup.string().trim().required("UAN Number is required"),

  npsEligible: Yup.boolean().required("NPS Eligibility is required"),

  esicNo: Yup.string().nullable(), // Optional, only for ESIC-covered employees

  basicSalaryANN: Yup.number()
    .typeError("Basic Salary must be a number")
    .min(0, "Basic Salary cannot be negative")
    .required("Basic Salary (Annual) is required"),

  FrequencyCI: Yup.string()
    .oneOf(["Monthly", "Biweekly", "Weekly", "Daily"], "Invalid Frequency")
    .required("Salary Frequency is required"),

  commentsCI: Yup.string().nullable(), // Optional, used for additional compensation details

  numberCI: Yup.string().nullable(), // Optional, context unclear

  unitOfMeasure: Yup.string().nullable(), // Only required if measured in hours, days, etc.

  effectiveStartDate: Yup.date()
    .typeError("Effective Start Date must be a valid date")
    .required("Effective Start Date is required"),
});
export default employeeSchema;
