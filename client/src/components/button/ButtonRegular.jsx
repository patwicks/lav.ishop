import React from "react";

export const ButtonRegular = ({ title, action }) => {
  return (
    <button
      className="transition-color h-[3rem] w-[10rem] rounded-sm bg-brand font-semibold text-white decoration-neutral-500 shadow-md shadow-brand/40 ease-in-out hover:border-2 hover:border-brand hover:bg-white hover:text-brand"
      action={action}
      onClick={action}
    >
      {title}
    </button>
  );
};
