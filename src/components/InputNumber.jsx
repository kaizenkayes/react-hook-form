import React from "react";

export default function InputNumber({ value, onChange, ...rest }) {

    const handleChange = (e) => {
        const value = e.target.valueAsNumber 
        onChange(value)
    }
  return (
    <input
      type="number"
      name=""
      id=""
      min={0}
      onChange={handleChange}
      {...rest}
      value={value}
    />
  );
}
