import React from "react";

const SelectBox = ({
  value,
  label,
  name,
  handleInputChange,
  options,
  error = {},
  touched = {},
}) => {
  return (
    <>
      <label htmlFor={name} className="mt-3 ms-3 text-gray-600 text-sm">
        {label}:
      </label>
      <select
        name={name}
        id={name}
        onChange={handleInputChange}
        value={value}
        className="h-10 p-2 rounded-md border-slate-500 outline-none mt-1 border-b-2 border-b-orange-950 w-full"
      >
        <option value="">Select {label}</option>
        {options.map((op, idx) => {
          return (
            <option value={op.id} key={idx}>
              {op.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectBox;
