import React from "react";

export const FormInput = ({ type, name, placeholder, value, onChange, onBlur }) => {
  return (
    <input
      className="w-full rounded-sm border border-mainBlack p-2"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required
      autoComplete="off"
    />
  );
};
