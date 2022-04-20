import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from './hooks/useInputState';

function EditTodoForm(props) {
    const [task, handleChange, reset] = useInputState(props.task);

    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form onSubmit={e => {
                e.preventDefault();
                props.editTodo(props.todoId, task);
                reset();
                props.close();
            }}
            >
                <TextField
                    fullWidth
                    label='Edit Todo'
                    margin='normal'
                    value={task}
                    onChange={handleChange}
                />
                <Button type='submit'>Edit Todo</Button>
            </form>
        </Paper>
    )
}
export default EditTodoForm;