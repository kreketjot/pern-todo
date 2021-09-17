import React from 'react';

const CancelTodo = ({ onClick }) => (
  <button type="button" className="btn btn-danger" onClick={onClick}>
    Cancel
  </button>
);

export default CancelTodo;
