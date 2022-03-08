import { ChangeEvent, useState } from "react";

const WelcomeName = () => {
  const [name, setName] = useState<string>("");

  const enterName = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value;
    setName(name);
  };

  return (
    <>
      <input type="text" onChange={enterName} />
      <br />
      <>{name}님 환영합니다.</>
    </>
  );
};

export default WelcomeName;
