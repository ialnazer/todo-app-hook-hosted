import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import {TodosContext} from './contexts/todos.context'

function EditTodoForm(props) {
    const [task, handleChange, reset] = useInputState(props.task);
    const { editTodo } = useContext(TodosContext);

    return (
        <form
            style={{ margin: '1rem 0', width: '50%' }}
            onSubmit={e => {
                e.preventDefault();
                editTodo(props.todoId, task);
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