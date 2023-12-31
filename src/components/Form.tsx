import React from "react";
import { useFormik } from "formik";
import CustomInput from "./CustomInput";
import { Button, Card } from "react-bootstrap";
import { basicSchema } from "../schemas";
import CustomCheckBox from "./CustomCheckBox";
import CustomDropDown from "./CustomDropDown";
import { Formik } from "../Types/Input";
const onSubmit = async (values: any, action: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  action.resetForm();
  console.log(values);
  console.log(action);
};
const genderOptions = [
  { value: "Gender", label: "Gender" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" },
];
const initalValues: Formik.initalValues = {
  email: "",
  age: null,
  password: "",
  confirmPassword: "",
  acceptTerms: false,
  selectGender: null,
  favDate: "",
};

function Form() {
  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initalValues,
    onSubmit,
    validationSchema: basicSchema,
  });
  return (
    <>
      <Card>
        <Card.Body className="text-center bg-primary text-white">
          Formik - Yup - TypeScript - React Bootstrap
        </Card.Body>
      </Card>
      <form
        className=" container mt-5 w-100 d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <CustomInput
          label="E-mail"
          id="email"
          type="email"
          placeholder="Enter Your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={touched.email && errors.email}
        />
        <CustomInput
          label="Age"
          id="age"
          type="number"
          placeholder="Enter Your Age"
          value={values.age ? `${values.age}` : "0"}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={touched.age && errors.age}
        />
        <CustomInput
          label="Password"
          id="password"
          type="password"
          placeholder="Enter Your Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={touched.password && errors.password}
        />
        <CustomInput
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Your Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={touched.confirmPassword && errors.confirmPassword}
        />
        <CustomInput
          label="Enter your favourite date"
          id="favDate"
          type="date"
          placeholder="Enter your favourite date"
          value={values.favDate ? `${values.favDate}` : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={touched.favDate && errors.favDate}
        />
        <CustomDropDown
          label="Gender"
          id="selectGender"
          errorMessage={touched.selectGender && errors.selectGender}
          value={values.selectGender ? `${values.selectGender}` : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          options={genderOptions}
          touched={touched.selectGender}
        />

        <CustomCheckBox
          label="I read and accept the terms of service"
          value={values.acceptTerms}
          id="acceptTerms"
          onChange={handleChange}
          errorMessage={touched.acceptTerms && errors.acceptTerms}
          touched={touched.acceptTerms}
        />
        <Button
          variant="primary"
          disabled={isSubmitting}
          className={
            Object.keys(errors).length > 0 || isSubmitting
              ? "w-50 opacity-25"
              : "w-50 opacity-100"
          }
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;
