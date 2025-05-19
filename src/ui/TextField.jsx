function TextField({
  type = "text",
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired,
  className,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        name={name}
        id={name}
        dir={dir}
        className={`textField textField__valid ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default TextField;
