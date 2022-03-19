import { Universities } from "./university.types";
import { ChangeEvent } from "react";

export type MyTableProps = {
  results: Universities;
};

export type MyButtonProps = {
  searchUniversities: () => void;
};

export type MyInputProps = {
  input: string;
  searchUniversities: () => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type NotFoundTextProps = {
  text: string;
};
