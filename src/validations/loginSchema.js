import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  loginId: Yup.string().required("Login ID is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
