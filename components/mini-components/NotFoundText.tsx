import React from "react";
import { NotFoundTextProps } from "../../types/props.types";
import Divider from "./Divider";

const NotFoundText = ({ text }: NotFoundTextProps) => {
  return (
    <>
      <Divider />
      <h1>{text}</h1>
    </>
  );
};

export default NotFoundText;
