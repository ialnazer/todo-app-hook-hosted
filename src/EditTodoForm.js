import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from './hooks/useInputState';

function EditTodoForm(props) {
    const [task, handleChange, reset] = useInputState(props.task);

    return (
        <form
            style={{ margin: '1rem 0', width: '50%' }}
            onSubmit={e => {
                e.preventDefault();
                props.editTodo(props.todoId, task);
                reset();
                props.close();
            }}
        >
            <TextField
                fullWidth
                autoFocus
                label='Edit Todo'
                margin='normal'
                value={task}
                onChange={handleChange}
            />
            {/* <Button type='submit'>Edit Todo</Button> */}
        </form>
    )
}
export default EditTodoForm;