import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";

type TodoType = {
  id: number;
  todo: string;
};

const TodoList = (): JSX.Element => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState<string>("");

  const updateTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };

  const registerTodo = async () => {
    await axios.post("http://localhost:5000/todos", { todo: todoText });
    setTodoText("");
    await getTodoList();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    await getTodoList();
  };

  const getTodoList = async () => {
    const { data } = await axios.get<TodoType[]>("http://localhost:5000/todos");
    setTodoList(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <section>
      <section>
        <input type="text" value={todoText} onChange={updateTodoText} />
        <button onClick={registerTodo}>등록</button>
      </section>
      <section>
        {todoList.map((todo) => {
          return (
            <section key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default TodoList;
