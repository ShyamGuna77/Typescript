import React, { useState } from "react";
import { useTodos } from "../store/TodoContext";

const TodoForm: React.FC = () => {
  const { dispatch } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="p-2 flex-1 border rounded-l"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
