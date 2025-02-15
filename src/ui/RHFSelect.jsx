function RHFSelect({ label, name, register, options, isRequired, errors }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select
        name={name}
        {...register(name)}
        id={name}
        className={`textField ${
          errors && errors[name] ? "textField__invalid" : "textField__valid"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="mt-2 block text-xs text-red-600">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default RHFSelect;
