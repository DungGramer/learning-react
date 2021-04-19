import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from '../TodoForm';

const TodoList = ({ todos, onTodoClick }) => {
  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  const handleTodoFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

export default TodoList;
