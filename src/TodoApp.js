import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'run', completed: false },
        { id: 2, task: 'eat', completed: true },
        { id: 3, task: 'drink', completed: false },
    ];
    const [todos, setTodos] = useState([]);

    const addTodo = (newTask) => {
        const newTodo = {
            id: uuidv4(),
            task: newTask,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }
    const deleteTodo = (todoId) => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <ToolBar>
                    <Typography color='inherit'>Todos With Hooks</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp;