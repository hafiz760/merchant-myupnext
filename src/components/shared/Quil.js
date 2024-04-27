import React from "react";
import JoditEditor from "jodit-react";
import { useField } from "formik";

function Quil({ label, ...props }) {
  const [field, meta, helpers] = useField(props.name);
  const handleBlur = () => {
    if (props.onBlur) props.onBlur(field.value);
  };

  const handleChange = (newContent) => {
    helpers.setValue(newContent);
    if (props.onChange) props.onChange(newContent);
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <JoditEditor
        height="200px"
        value={field.value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {meta.touched && meta.error && (
        <p className=" mt-1 text-danger mb-">{meta.error}</p>
      )}
    </div>
  );
}

export default Quil;
