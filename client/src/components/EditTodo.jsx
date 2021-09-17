import React from 'react';

const EditTodo = ({ onClick }) => (
  <button type="button" className="btn btn-warning" onClick={onClick}>
    Edit
  </button>
);

export default EditTodo;
