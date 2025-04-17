import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [{
        id: 1,
        title: "Todo 1",
        completed: false,
    },
    {
        id: 2,
        title: "Todo 2",
        completed: false,
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
})

export const useTodo = () => useContext(todoContext)

export const TodoProvider = todoContext.Provider 