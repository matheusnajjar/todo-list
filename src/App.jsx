import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Add feature to system',
      category: 'Work',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Go to gym',
      category: 'Personal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'React improvement',
      category: 'Study',
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState('');

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
