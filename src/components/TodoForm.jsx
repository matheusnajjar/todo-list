const TodoForm = () => {
  return <div className="todo-form">
    <h2>Create Task</h2>
    <form>
      <input type="text" placeholder="Insert your task" />
      <select>
        <option value="">Select a category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
      </select>
      <button type="submit">Add</button>
    </form>
  </div>
}

export default TodoForm;