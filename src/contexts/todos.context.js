import React, { createContext, useContext } from "react";
import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();

export function TodosProvider(props) {
    const initialTodos = [];
    const { todos, addTodo, deleteTodo, editTodo, toggleTodo } = useTodoState(initialTodos);
    return (
        // the value will be accessed by this context component children
        <TodosContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, toggleTodo  }}>
            {props.children}
        </TodosContext.Provider>
    )
}