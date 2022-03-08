import { ChangeEvent, useState } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>();
  const arr = ["hi", "hello"];

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value;
    const nameLength = event.currentTarget.value.length;
    const starLength = nameLength - 2;
    let hiddenName = "";

    if (starLength >= 0) {
      const first = name[0];
      const last = name[nameLength - 1];
      let star = "";
      for (star = ""; star.length < starLength; star += "*");
      hiddenName = first + star + last;
    }

    setName(hiddenName);
  };

  return (
    <>
      <input type="text" onChange={updateName} />
      <article>{name}</article>
      {arr.map((name, index) => {
        return (
          <h1 key={index}>
            {name}, {index}
          </h1>
        );
      })}
    </>
  );
};

export default HiddenName;
