import React from "react";

const InputBox = ({
  value,
  label,
  type = "text",
  name,
  placeholder,
  handleInputChange,
  handleBlur,
  readOnly = false,
  error = {},
  touched = {},
}) => {
  return (
    <>
      <label htmlFor={name} className="mt-3 ms-3 text-gray-600 text-sm">
        {label}:
      </label>
      <input
        className="h-10 p-2 rounded-md border-slate-500 outline-none mt-1 border-b-2 border-b-orange-950 w-full"
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleBlur}
        readOnly={readOnly}
      />
      {error[name] && touched[name] && (
        <span className="text-red-500">{error[name]}</span>
      )}
    </>
  );
};

export default InputBox;
