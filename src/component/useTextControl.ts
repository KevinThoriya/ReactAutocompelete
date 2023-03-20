import { ChangeEvent, useState } from "react";

const useTextControl = () => {
  const [controlledText, setControlledText] = useState("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setControlledText(e.target.value);
  };
  return [controlledText, onChangeText, setControlledText] as const;
};

export default useTextControl;
