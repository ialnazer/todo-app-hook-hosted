import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import {DispatchContext} from './contexts/todos.context'

function TodoForm() {
    const [task, handleChange, reset] = useInputState('');
    const { dispatch } = useContext(DispatchContext);

    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: 'ADD', task: task});
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