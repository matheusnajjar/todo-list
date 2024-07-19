import PropTypes from 'prop-types'

const Todo = ({ todo }) => {
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
          <button className='remove'>x</button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
}

export default Todo;