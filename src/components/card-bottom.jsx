import React from "react";
import { Bottom } from "./styles/card-bottom/card-bottom.styled";

export default function CardBottom({ subheading1, subheading2 }) {
  return (
    <Bottom>
      <span>{subheading2}</span>
      <span>{subheading1}</span>
    </Bottom>
  );
}
