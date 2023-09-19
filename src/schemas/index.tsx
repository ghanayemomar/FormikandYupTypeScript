import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Plase enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must read and accept the terms of service")
    .required("Required"),
  selectGender: yup
    .string()
    .oneOf(["Male", "Female", "Others"], "Error")
    .required("Required"),
  favDate: yup.date().required("Required"),
});
