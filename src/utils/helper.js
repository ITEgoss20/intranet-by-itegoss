import {
  User,
  LayoutDashboard,
  Users,
  ClipboardList,
  Calendar,
  Package,
  Settings,
  LogOut,
} from "lucide-react";

export const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "User Role Module", icon: User, path: "/user-role-module" },
  { name: "People", icon: Users, path: "/people" },
  {
    name: "Onboarding / Offboarding",
    icon: ClipboardList,
    path: "/boadring-management",
  },
  { name: "Leave Management", icon: Calendar, path: "/leave-management" },
  {
    name: "Request Management",
    icon: ClipboardList,
    path: "/request-management",
  },
  {
    name: "Inventory Management",
    icon: Package,
    path: "/inventory-management",
  },
  { name: "Asset Management", icon: Settings, path: "/asset-management" },
  { name: "Visitor / Vendor / Customer", icon: Users, path: "/vvc-management" },
  { name: "Task Allocation", icon: ClipboardList, path: "/task-allocation" },
  { name: "MIS Dashboard", icon: LayoutDashboard, path: "/mis-dashboard" },
  {
    name: "Logout",
    icon: LogOut,
    action: true,
  },
];

export const peopleFormArray = {
  maritalStatus: ["Single", "Married", "Divorced", "Widowed"],
  genders: ["Male", "Female", "Other"],
  countries: ["India", "USA", "Canada", "UK", "Other"],
  titles: ["Mr.", "Mrs.", "Ms.", "Dr."],
  relations: ["Father", "Mother", "Sister", "Friend"],
};

export const peopleInitialStates = {
  title: "",
  personalInfoFirstName: "",
  personalInfoMiddleName: "",
  personalInfoLastName: "",
  personalInfoGender: "",
  personalInfoMaritalStatus: "",
  personalInfoMaritalSince: "",
  employeeWorkCountry: "",
  citizenship1: "",
  citizenship2: "",
  dobBiographicalInfo: "",
  countryOfBirthBiographicalInfo: "",
  bloodGroup: "",
  corporateUserID: "",
  adharNumber: "",
  attachment1IDInfo: null,
  nameAsperNationalId: "",
  permanantAccountNumber: "",
  attachment2IDInfo: null,
  attachmentContact: null,
  bussinessEmail: "",
  bussinessMobile: "",
  personalModile: "",
  nameEmergencysContact: "",
  relationsEmergencysContact: "",
  phoneNumberEmergencysContact: "",
  emailAddressEmergencysContact: "",
  homeAddress: "",
  attachment1AddressInfo: null,
  mailPortalAddress: "",
  attachment2AddressInfo: null,
  firstNameDependentsInfo: "",
  middleNameDependentsInfo: "",
  lastNameDependentsInfo: "",
  relationship: "",
  dobDependentsInfo: "",
  attachmentDependentsInfo: null,
  jobCountryBAI: "",
  paymentMethod: "",
  bankCountryRegion: "",
  bankAccountName: "",
  bankAccountNumber: "",
  currency: "",
  IFSCCode: "",
  attachmentBAI: null,
  countryNominationsIndia: "",
  beneficiaryName: "",
  beneficiaryRelationship: "",
  beneficiaryDOB: "",
  beneficiaryFullAddress: "",
  supervisorName: "",
  empId1: "",
  performanceReviewerName: "",
  empId2: "",
  hrName: "",
  empId3: "",
  employeeStatus: "",
  officeLocation: "",
  defaultWeeklyHours: "",
  timeZone: "",
  attachmentJobInfo: null,
  countryJobInfo: "",
  contractEndDate: "",
  mostRecentHireDate: "",
  priorServiceDate: "",
  joiningDate: "",
  seniorityStartDate: "",
  payGroup: "",
  npsOpted: "",
  LocalID: "",
  npsNumber: "",
  empPentionSchemeStatus: "",
  providentFundNumber: "",
  pentionTrustID: "",
  providentFundTrustID: "",
  pentionNumber: "",
  uanNo: "",
  npsEligible: "",
  esicNo: "",
  basicSalaryANN: "",
  FrequencyCI: "",
  commentsCI: "",
  numberCI: "",
  unitOfMeasure: "",
  effectiveStartDate: "",
};
