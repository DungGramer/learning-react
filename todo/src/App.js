import { useState, useEffect } from 'react';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import queryString from 'query-string';
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
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    (async () => {
      const paramsString = queryString.stringify(filters);
      const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await fetch(requestURL);
      const responseJSON = await response.json();
      const { data, pagination } = responseJSON;
      setPostList(data);
      setPagination(pagination);
    })().catch((err) => {
      console.error(err.message);
    });
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

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
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
