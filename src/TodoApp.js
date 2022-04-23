import React, { useContext } from 'react';
import useTodoState from './hooks/useTodoState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Switch from "@material-ui/core/Switch";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { ThemeContext } from "./contexts/ThemeContext";

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };
    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function TodoApp(props) {

    const initialTodos = [];
    const { todos, addTodo, deleteTodo, editTodo, toggleTodo } = useTodoState(initialTodos);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.7)' : '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color={isDarkMode ? 'default' : 'primary'} position='static' style={{ height: '64px' }}>
                <ToolBar>
                    <Typography variant='h5' color='inherit'>Todo List</Typography>
                    <Switch onChange={toggleTheme}/>
                </ToolBar>
            </AppBar>
            <ToolBar id="back-to-top-anchor" />
            <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Paper>
    )
}
export default TodoApp;