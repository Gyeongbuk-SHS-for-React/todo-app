import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [value, setValues] = useState("");
  return (
    <div>
      <input
        placeholder="Add todo"
        value={value}
        onChange={(e) => setValues(e.target.value)}
      />
      <button
        onClick={() => {
          setValues("");
          onAddTodo(value);
        }}
      >
        추가
      </button>
    </div>
  );
};

export default AddTodo;
