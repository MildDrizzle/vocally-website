import React from "react";
import { InputProps } from "../utils/types";

export default function Input({
  type,
  placeholder,
  value,
  setValue,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="input"
    />
  );
}
