import React from "react";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="form-label" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={`form-control focus:border-orange-500 border shadow-hidden ${
          meta.error && meta.touched ? "border-danger" : ""
        }`}
        {...field}
        id={props.id}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className=" mt-1 text-danger mb-1">{meta.error}</p>
      )}
    </div>
  );
}

export default CustomInput;
