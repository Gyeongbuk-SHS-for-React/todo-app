import React, { useState, useContext } from "react";
import { TodosContext, TodosDispatchContext, useTodos } from "./TodosProvider";

export default function TodoList({ onChangeTodo, onDeleteTodos }) {
  const todos = useTodos();
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

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TodosDispatchContext);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.content}
          onChange={(e) =>
            dispatch({
              type: "change",
              todo: { ...todo, content: e.target.value },
            })
          }
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
        onChange={(e) =>
          dispatch({
            type: "change",
            todo: { ...todo, done: e.target.checked },
          })
        }
      />
      {todoContent}
      <button onClick={() => dispatch({ type: "delete", id: todo.id })}>
        삭제
      </button>
    </label>
  );
};
