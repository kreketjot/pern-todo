import './App.css';
import React, { Fragment, useState } from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="d-flex align-items-center flex-column mt-5">
      <>
        <InputTodo todos={todos} setTodos={setTodos} />
        <ListTodos todos={todos} setTodos={setTodos} />
      </>
    </div>
  );
}

export default App;
