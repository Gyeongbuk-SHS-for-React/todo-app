import React, { useState, useContext } from "react";
import { TodosDispatchContext } from "./TodosProvider";

let nextId = 0;
const AddTodo = () => {
  const [value, setValues] = useState("");
  const dispatch = useContext(TodosDispatchContext);
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
          dispatch({ type: "add", id: nextId++, content: value });
        }}
      >
        추가
      </button>
    </div>
  );
};

export default AddTodo;
