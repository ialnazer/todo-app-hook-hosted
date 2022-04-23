import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggle';
import {TodosContext} from './contexts/todos.context'

function TodoItem({ task, id, completed, notLastTodo }) {
    const [showEditTodoForm, toggleShowEditTodoForm] = useToggle(false);
    const { deleteTodo, editTodo, toggleTodo } = useContext(TodosContext);

    return (
        <div>
            <ListItem style={{ height: '64px' }}>
                {showEditTodoForm ?
                    < EditTodoForm todoId={id} task={task} close={toggleShowEditTodoForm} />
                    :
                    <>
                        {/* <> fragment cz Checkbox and what follow are JSON */}
                        <Checkbox
                            tabIndex={-1}
                            disableRipple
                            checked={completed}
                            onClick={() => toggleTodo(id)}
                        />
                        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Delete' onClick={() => deleteTodo(id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label='Edit' onClick={() => toggleShowEditTodoForm()}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                }
            </ListItem>
            {notLastTodo && <Divider />}
        </div>
    )
}
export default TodoItem;