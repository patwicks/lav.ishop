import React from "react";
import { useFormik } from "formik";
//local imports
import AppLayout from "../AppLayout";
import LoginForm from "./components/LoginForm";
import { loginValidation } from "./validation/loginValidation";

const LoginPage = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidation,
      onSubmit,
    });
  return (
    <AppLayout>
      <LoginForm />
    </AppLayout>
  );
};

export default LoginPage;
