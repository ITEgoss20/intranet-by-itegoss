import * as Yup from "yup";
export const peopleSchema = Yup.object().shape({
  salutation: Yup.string().required("Salutation is required"),
  legalGender: Yup.string().required("Legal Gender is required"),
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string().required("Middle Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  maritalStatusSince: Yup.date().required("Marital Status Since is required"),
  preferredFirstName: Yup.string().required("Preferred First Name is required"),
  employeeWorkCountry: Yup.string().required(
    "Employee Work Country is required"
  ),
  citizenship1: Yup.string().required("Citizenship1 is required"),
  citizenship2: Yup.string().required("Citizenship2 is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  businessMobile: Yup.string()
    .matches(/^\d{10}$/, "Business Mobile must be 10 digits")
    .required("Business Mobile is required"),
  personalMobile: Yup.string()
    .matches(/^\d{10}$/, "Personal Mobile must be 10 digits")
    .required("Personal Mobile is required"),
});
