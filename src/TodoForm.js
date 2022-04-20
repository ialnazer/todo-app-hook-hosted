import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import Button from '@material-ui/core/Button';

function TodoForm({ addTodo }) {
    const [task, handleChange, reset] = useInputState('');

    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(task);
                reset();
            }}
            >
                <TextField
                    autoFocus
                    fullWidth
                    label='Add New Todo'
                    margin='normal'
                    value={task}
                    onChange={handleChange}
                />
                {/* <Button type='submit'>Add Todo</Button> */}
            </form>
        </Paper>
    )
}
export default TodoForm;