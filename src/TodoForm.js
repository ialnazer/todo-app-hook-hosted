import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import Button from '@material-ui/core/Button';

function TodoForm({ addTodo }) {
    const [task, handleChange, reset] = useInputState('');

    return (
        <Paper>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(task);
                reset();
            }}
            >
                <TextField value={task} onChange={handleChange} placeholder='new task' />
                <Button type='submit'>Add Todo</Button>
            </form>
        </Paper>
    )
}
export default TodoForm;