// import { Input } from "@/components/ui/input";

const InputWithoutLabel = ({
  type = "text",
  placeholder,
  name,
  value,
  errors,
}) => {
  return (
    <>
      <input
        className="h-10 p-2 rounded-sm border-slate-500 outline-none m-2"
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        errors={errors}
      />
    </>
  );
};

export default InputWithoutLabel;
