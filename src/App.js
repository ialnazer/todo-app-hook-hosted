import TodoApp from './TodoApp';
import { ThemeProvider } from './contexts/ThemeContext';
import { TodosProvider } from './contexts/todos.context';

function App() {
  return (
    <TodosProvider>
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </TodosProvider>
  );
}

export default App;
