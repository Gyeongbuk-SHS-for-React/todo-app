import React, { useState, useContext } from "react";
import { TodosContext } from "./TodosContext";

export default function TodoList({ onChangeTodo, onDeleteTodos }) {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodos} />
        </li>
      ))}
    </ul>
  );
}

const Todo = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.content}
          onChange={(e) => onChange({ ...todo, content: e.target.value })}
        />
        <button onClick={() => setIsEditing(false)}>저장</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.content}
        <button onClick={() => setIsEditing(true)}>수정</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => onChange({ ...todo, done: e.target.value })}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </label>
  );
};
