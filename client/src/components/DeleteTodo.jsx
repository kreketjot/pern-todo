import React from 'react';

const DeleteTodo = ({ onClick }) => (
  <button type="button" className="btn btn-danger" onClick={onClick}>
    Delete
  </button>
);

export default DeleteTodo;
