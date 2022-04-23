import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';
import {TodosContext} from './contexts/todos.context'

function TodoList(props) {
    const { todos } = useContext(TodosContext);
    const todoItems = todos.map((todo, index) => (
        <TodoItem
            {...todo}
            key={index}
            notLastTodo={index < todos.length - 1}
        />
    ));
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todoItems}
                </List>
            </Paper>
        )
    return null
}
export default TodoList;
