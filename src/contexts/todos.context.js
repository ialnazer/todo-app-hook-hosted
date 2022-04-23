import React, { createContext, useReducer } from "react";
import todoReducer from '../reducers/todo.reducer';
const initialTodos = [];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch]= useReducer(todoReducer, initialTodos);
    return (
        // the value will be accessed by this context component children
        <TodosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodosContext.Provider>
    )
}