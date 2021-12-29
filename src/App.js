import React, { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./Todolist";
import "./App.css";

let nextId = 0;
export default function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const handleAddTodo = (value) => {
    dispatch({ type: "add", id: nextId++, content: value });
  };

  const handleChangeTodo = (todo) => {
    dispatch({ type: "change", todo: todo });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({ type: "delete", id: todoId });
  };

  return (
    <div className="main">
      <h1>Todo list</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodos={handleDeleteTodo}
      ></TodoList>
    </div>
  );
}

function todosReducer(todos, action) {
  switch (action.type) {
    case "add": {
      return [
        ...todos,
        {
          id: action.id,
          content: action.content,
          done: false,
        },
      ];
    }
    case "change": {
      return todos.map((item) => {
        console.log(action, item, "in app");
        if (item.id === action.todo.id) {
          return action.todo;
        } else {
          return item;
        }
      });
    }
    case "delete": {
      return todos.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("action error : " + action.type);
    }
  }
}
