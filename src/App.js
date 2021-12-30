import React from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./Todolist";
import { TodosProvider } from "./TodosProvider";

export default function TodoApp() {
  return (
    <TodosProvider>
      <div className="main">
        <h1>Todo list</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodosProvider>
  );
}
