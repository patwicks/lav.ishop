import React from "react";
import { SpinLoader } from "../loader/SpinLoader";
export const FormButton = ({ text, isSubmitting }) => {
  return (
    <button
      className="flex w-full items-center justify-center rounded-md bg-brand py-2 text-lg font-semibold uppercase text-white transition-all duration-300 ease-in-out enabled:hover:bg-brand/50 disabled:cursor-not-allowed"
      disabled={isSubmitting}
      type="submit"
    >
      {isSubmitting ? <SpinLoader /> : <span>{text}</span>}
    </button>
  );
};
