import React, { useState } from "react";
import { useTodos } from "../store/TodoContext";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const { dispatch } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  return (
    <li
      className={`flex justify-between items-center p-2 my-2 bg-white shadow rounded ${
        completed ? "line-through text-gray-500" : ""
      }`}
    >
      {isEditing ? (
        <input
          className="border p-1"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: id })}>
          {text}
        </span>
      )}
      <div>
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
            onClick={() => {
              dispatch({ type: "EDIT_TODO", payload: { id, text: newText } });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
