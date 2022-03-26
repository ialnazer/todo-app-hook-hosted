import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function TodoItem(props) {
    return (
        <div>
            <ListItem>
                <ListItemText>{props.task}</ListItemText>
            </ListItem>
            <Divider />
        </div>
    )
}
export default TodoItem;