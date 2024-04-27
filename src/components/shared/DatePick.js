import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const handleDateChange = (date) => {
    helpers.setValue(date);
  };

  return (
    <div className="mb-3">
      <label className="form-label d-block ">{label}</label>
      <DatePicker
        className={`form-control w-100  ${
          meta.error && meta.touched ? "border-danger" : ""
        } `}
        selected={field.value || null}
        onChange={handleDateChange}
        onBlur={() => helpers.setTouched(true)}
        placeholderText={props.placeholderText}
        style={{ width: "100%" }}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="mt-1 text-danger">{meta.error}</div>
      )}
    </div>
  );
};

export default DatePick;
