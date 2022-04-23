import React, { createContext } from "react";
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer.js'
const initialTodos = [];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', initialTodos, todoReducer);
    return (
        // the value will be accessed by this context component children
        <TodosContext.Provider value={{ todos }}>
            <DispatchContext.Provider value={{ dispatch }}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}