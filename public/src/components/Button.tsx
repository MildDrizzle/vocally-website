import React from "react";
import { ButtonProps } from "../utils/types";

export default function Button({
  text,
  isFormButton = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${isFormButton ? "form-button" : ""}`}
    >
      {text}
    </button>
  );
}
