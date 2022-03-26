import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';

function TodoList(props) {
    const todos = props.todos.map((todo, index) => (
            <TodoItem {...todo} key={index}/>
    ));
    return (
        <Paper>
            <List>
                {todos}
            </List>
        </Paper>
    )
}
export default TodoList;
