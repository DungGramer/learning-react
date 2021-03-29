import { useState, useEffect } from 'react';
import './App.scss';
import PostList from './components/PostList';
// import TodoForm from './components/TodoForm';
// import ColorBox from './components/ColorBox';
// import TodoList from './components/TodoList';

function App() {
  /*   const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]); */

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      const requestURL =
        'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const response = await fetch(requestURL);
      const responseJSON = await response.json();
      const { data } = responseJSON;
      setPostList(data);
    })().catch((err) => {
      console.error(err.message);
    });
  }, []);

  /*   function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: Date.now(),
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  } */

  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
