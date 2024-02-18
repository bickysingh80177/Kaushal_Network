const InputWithoutLabel = ({
  type = "text",
  placeholder,
  name,
  value,
  errors = {},
  touched = {},
  handleInputChange,
  handleBlur,
  readOnly = false,
}) => {
  return (
    <>
      <input
        className="h-10 p-2 rounded-md border-slate-500 outline-none m-2 border-b-2 border-b-orange-950 w-full"
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleBlur}
        readOnly={readOnly}
      />
      {errors[name] && touched[name] && (
        <span className="text-red-500">{errors[name]}</span>
      )}
    </>
  );
};

export default InputWithoutLabel;
