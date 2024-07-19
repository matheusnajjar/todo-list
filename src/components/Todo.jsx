import PropTypes from 'prop-types'

const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
          <p className="category">
            ({todo.category})
          </p>
      </div>
        <div>
          <button className='complete'>Complete</button>
          <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  removeTodo: PropTypes.func.isRequired
}


export default Todo;