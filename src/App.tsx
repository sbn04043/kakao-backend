import React, { ChangeEvent, KeyboardEvent, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import Todo from "./TodoList";
const App = (): JSX.Element => {
  useEffect(() => {
    alert("hello");
  });
  return (
    <>
      <Counter defaultCounter={5} />
      <Adder />
      <WelcomeName />
      <br />
      <ConditionalText />
      <HiddenName />
      <Todo />
    </>
  );
};

export default App;
