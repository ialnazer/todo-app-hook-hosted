import React, { useState } from 'react';
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

function TodoItem({ task, id, completed, deleteTodo, toggleTodo, editTodo }) {
    const [showEditTodoForm, toggleShowEditTodoForm] = useToggle(false);

    return (
        <div>
            <ListItem>
                {showEditTodoForm ?
                    < EditTodoForm todoId={id} task={task} editTodo={editTodo} close={toggleShowEditTodoForm} />
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
            <Divider />
        </div>
    )
}
export default TodoItem;