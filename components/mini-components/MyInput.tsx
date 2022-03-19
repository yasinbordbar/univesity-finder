import React from "react";
import { Input } from "semantic-ui-react";
import { MyInputProps } from "../../types/props.types";

const MyInput = ({ input, searchUniversities, handleInput }: MyInputProps) => {
  return (
    <Input
      className="my-5"
      value={input}
      onKeyDown={(e: any) => e.keyCode === 13 && searchUniversities()}
      onChange={handleInput}
      icon="search"
      placeholder="Search University..."
    />
  );
};

export default MyInput;
