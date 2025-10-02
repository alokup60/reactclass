import { useState } from "react";
import LabelInput from "./LabelInput";

const SKILLS = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C#", value: "csharp" },
  { label: "Ruby", value: "ruby" },
];

function ControlledForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    skills: [],
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  function validate() {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    if (formData.skills.length === 0)
      newErrors.skills = "Select at least one skill";
    return newErrors;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (name === "skills") {
      setFormData((prev) => {
        const skills = prev.skills.includes(value)
          ? prev.skills.filter((skill) => skill !== value)
          : [...prev.skills, value];
        return { ...prev, skills };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Form submitted", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      skills: [],
      subscribe: false,
    });
  }
  return (
    <form
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        {" "}
        <h2 className="font-bold text-blue-500 text-xl"> Controlled Form </h2>
      </div>
      <LabelInput
        labelName="First Name"
        inputType="text"
        inputName="firstName"
        inputValue={formData.firstName}
        handleChange={handleChange}
        errors={errors}
      />
      <LabelInput
        labelName="Last Name"
        inputType="text"
        inputName="lastName"
        inputValue={formData.lastName}
        handleChange={handleChange}
        errors={errors}
      />
      <LabelInput
        labelName="Email"
        inputType="email"
        inputName="email"
        inputValue={formData.email}
        handleChange={handleChange}
        errors={errors}
      />

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Skills</label>
        <div className="flex flex-wrap gap-4">
          {SKILLS.map((skill) => (
            <label key={skill.value} className="inline-flex items-center">
              <input
                type="checkbox"
                name="skills"
                value={skill.value}
                checked={formData.skills.includes(skill.value)}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">{skill.label}</span>
            </label>
          ))}
        </div>
        {errors.skills && (
          <p className="text-red-500 text-sm">{errors.skills}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded`}
          rows="4"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span className="ml-2 text-gray-700">Subscribe to newsletter</span>
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default ControlledForm;
