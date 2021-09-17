import React from 'react';

const SaveTodo = ({ onClick }) => (
  <button type="button" className="btn btn-warning" onClick={onClick}>
    Save
  </button>
);

export default SaveTodo;
