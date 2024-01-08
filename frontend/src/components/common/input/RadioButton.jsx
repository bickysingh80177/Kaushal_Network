const RadioButton = ({
  name,
  value,
  options,
  readOnly = false,
  touched = {},
  errors = {},
  handleInputChange,
  handleBlur = {},
}) => {
  return (
    <>
      <ul className="w-48 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg">
        {options.map((option) => (
          <li
            className="w-full border-b border-gray-200 rounded-t-lg"
            key={option.value}
          >
            <div className="flex items-center ps-3">
              <input
                id={option.value}
                type="radio"
                value={option.value}
                name={name}
                className="w-4 text-blue-600 bg-gray-100 border-gray-300"
                defaultChecked={value === option.value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                disabled={readOnly}
              />
              <label
                htmlFor="list-radio-license"
                className="w-full py-1 ms-2 text-sm font-medium text-gray-900"
              >
                {option.name}
              </label>
            </div>
          </li>
        ))}
      </ul>
      {errors[name] && touched[name] && <span>{errors[name]}</span>}
    </>
  );
};

export default RadioButton;
