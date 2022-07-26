import React from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../../components/form/FormInput";
import { FormInputPassword } from "../../../components/form/FormInputPassword";
import { FormButton } from "../../../components/form/FormButton";

const LoginForm = () => {
  let navigateTo = useNavigate();
  return (
    <div className="container flex justify-center py-20">
      <form className="flex w-full max-w-[30rem] flex-col px-4">
        <h1 className="text-2xl font-bold leading-10">Login</h1>
        <p className="mb-5 text-sm text-whitegray-500">
          Input your corrent credentials to login.
        </p>
        <label className="mt-5" htmlFor="email">
          Email
        </label>
        <FormInput type="email" name="email" placeholder="Email" />
        <label className="mt-5" htmlFor="password">
          Password
        </label>
        <FormInputPassword name="password" placeholder="password" />
        <div className="mt-10">
          <FormButton text="Login" />
        </div>
        <p className="mt-5 text-sm">
          Not yet registered?{" "}
          <span
            className="decoration underline hover:text-brand"
            onClick={() => navigateTo("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
