import React from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
export const FormInputPassword = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  const [show, setShow] = React.useState(false);
  const toggleShowPassword = () => {
    setShow(!show);
  };
  return (
    <div className="relative">
      <input
        className="w-full rounded-sm border border-mainBlack p-2"
        name={name}
        type={!show ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onblur}
        required
      />
      <div className="absolute text-xl right-2 top-3">
        {!show ? <RiEyeLine className="hover:opacity-80" onClick={toggleShowPassword} /> : < RiEyeCloseLine className="hover:opacity-80" onClick={toggleShowPassword} />}
      </div>
    </div>
  );
};
