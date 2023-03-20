import { ChangeEvent, useState } from "react";

const useTextControl = () => {
  const [controlledText, setControlledText] = useState("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setControlledText(e.target.value);
  };

  const clearText = () => setControlledText('');
  return [controlledText, onChangeText, clearText, setControlledText] as const;
};

export default useTextControl;
