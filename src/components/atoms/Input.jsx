import React from "react";

function Input({type, value, onChange, placeholder}) {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-[#000] text-sm rounded-lg focus:ring-[#000] focus:border-[#fff] block  p-2.5 checked:bg-emerald-500 w-full"
      />
    </>
  );
}

export default Input;
