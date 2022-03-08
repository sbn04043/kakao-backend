import { MouseEvent, useState, ChangeEvent } from "react";

const Adder = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const changeFirst = (event: ChangeEvent<HTMLInputElement>) => {
    const number = event.currentTarget.value;
    if (number.length === 0) setFirst(0);
    else setFirst(Number.parseInt(number));
  };

  const changeSecond = (event: ChangeEvent<HTMLInputElement>) => {
    const number = event.currentTarget.value;
    if (number.length === 0) setSecond(0);
    else setSecond(Number.parseInt(number));
  };

  return (
    <section>
      <input type="text" onChange={changeFirst} />+
      <input type="text" onChange={changeSecond} />
      <section>{first + second}</section>
    </section>
  );
};

export default Adder;
