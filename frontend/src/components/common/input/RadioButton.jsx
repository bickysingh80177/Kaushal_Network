const RadioButton = ({ label, id, name, value, options }) => {
  return (
    <>
      <h3 className="mb-4 font-semibold text-gray-900">{label}</h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        {options.map((option) => (
          <li
            className="w-full border-b border-gray-200 rounded-t-lg"
            key={option.value}
          >
            <div className="flex items-center ps-3">
              <input
                id="list-radio-license"
                type="radio"
                value={option.value}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="list-radio-license"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                {option.name}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RadioButton;
