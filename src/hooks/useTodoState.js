import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialVal => {
    const [todos, setTodos] = useState(initialVal);
    return {
        todos,
        addTodo: newTask => {
            const newTodo = {
                id: uuidv4(),
                task: newTask,
                completed: false
            };
            setTodos([...todos, newTodo]);
        },
        deleteTodo: todoId => {
            const newTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(newTodos);
        },
        toggleTodo: todoId => {
            const newTodos = todos.map(todo => {
                if (todo.id == todoId) return { ...todo, completed: !todo.completed }
                else return todo
            });
            setTodos(newTodos);
        },
        editTodo: (todoId, newTask) => {
            const newTodos = todos.map(todo => {
                if (todo.id == todoId) return { ...todo, task: newTask }
                else return todo
            });
            setTodos(newTodos);
        }
    }
};
