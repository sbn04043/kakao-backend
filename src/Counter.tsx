import { MouseEvent, useState } from "react";

type CounterType = {
  defaultCounter: number;
};

const Counter = (props: CounterType) => {
  const { defaultCounter } = props;
  const [count, setCount] = useState<number>(defaultCounter);

  const increaseCount = (event: MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };

  const decreaseCount = (event: MouseEvent<HTMLButtonElement>) => {
    setCount(count - 1);
  };

  return (
    <section>
      <section>{count}</section>
      <section>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </section>
    </section>
  );
};

export default Counter;
