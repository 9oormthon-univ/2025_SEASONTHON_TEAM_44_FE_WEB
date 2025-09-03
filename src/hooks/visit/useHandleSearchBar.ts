import * as React from "react";
import { useState } from "react";

export const useHandleSearchBar = () => {
  const [inputText, setInputText] = useState("");

  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return {
    inputText,
    onChangeInputText,
  };
};
