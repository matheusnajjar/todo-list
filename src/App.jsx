import { useState } from 'react'
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Add feature to system",
      category: "Work",
      isCompleted: false,
    },
    {
      id:2,
      text: "Go to gym",
      category: "Personal",
      isCompleted: false,
    },
    {
      id:3,
      text: "React improvement",
      category: "Study",
      isCompleted: false,
    }
  ])
  return (
    <div className='app'>
      <h1>To Do List</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
    </div>
  )
}

export default App
