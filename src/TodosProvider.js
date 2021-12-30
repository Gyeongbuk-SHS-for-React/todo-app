import React, { useReducer, createContext, useContext } from "react";

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
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
