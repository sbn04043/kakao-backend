import { ChangeEvent, useState } from "react";

const ConditionalText = () => {
  const [text, setText] = useState<string>();

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;
    text.length > 5 ? setText(text) : setText("");
    // if (text.length > 5) {
    //   setText(text);
    // } else {
    //   setText("");
    // }
  };

  return (
    <>
      <input type="text" onChange={updateText} />
      <br />
      {text}
    </>
  );
};

export default ConditionalText;
