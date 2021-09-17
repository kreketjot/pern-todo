import React, { Fragment, useState } from 'react';

const InputTodo = ({ todos, setTodos }) => {
  const [description, setDescription] = useState('');

  const changeInput = (evt) => setDescription(evt.currentTarget.value);

  const submitInput = async (evt) => {
    evt.preventDefault();
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    });
    setDescription('');
    const json = await response.json();
    setTodos(todos.concat(json));
  };

  return (
    <>
      <h1>Todo List</h1>
      <form className="d-flex mt-5" onSubmit={submitInput}>
        <input type="text" className="form-controll" value={description} onChange={changeInput} />
        <button type="submit" className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
