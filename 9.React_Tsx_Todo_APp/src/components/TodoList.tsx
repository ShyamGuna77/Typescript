
import React from "react";
import { useTodos } from "../store/TodoContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { state } = useTodos();

  return (
    <ul>
      {state.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
