const RadioButton = ({ label, id, name, value }) => {
  return (
    <div className="flex items-center justify-start mb-2">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={id} className="ms-2 text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
