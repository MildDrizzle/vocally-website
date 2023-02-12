import React from "react";
import { TypoGraphyProps } from "../utils/types";

export default function Typography({ type, text }: TypoGraphyProps) {
  return (
    <div>
      {type === "title" && <h1>{text}</h1>}
      {type === "subTitle" && <p>{text}</p>}
    </div>
  );
}
