import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import {TodosContext} from './contexts/todos.context'

function EditTodoForm(props) {
    const [task, handleChange, reset] = useInputState(props.task);
    const { dispatch } = useContext(TodosContext);

    return (
        <form
            style={{ margin: '1rem 0', width: '50%' }}
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: 'EDIT', id: props.todoId, newTask: task});
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