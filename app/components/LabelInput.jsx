function LabelInput({ labelName, inputType, inputName, inputValue, handleChange, errors }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{labelName}</label>
      <input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        className={`w-full px-3 py-2 border ${errors && errors[inputName] ? "border-red-500" : "border-gray-300"} rounded`}
      />
      {errors && errors[inputName] && (
        <p className="text-red-500 text-sm">{errors[inputName]}</p>
      )}
    </div>
  );
}

export default LabelInput;