import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';
import SaveTodo from './SaveTodo';
import DeleteTodo from './DeleteTodo';
import CancelEditTodo from './CancelEditTodo';

const ListTodos = ({ todos, setTodos }) => {
  const [edit, setEdit] = useState(0);
  const [value, setValue] = useState('');

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const json = await response.json();
      setTodos(json);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const editTodo = (todo) => {
    setValue(todo.description);
    setEdit(todo.todo_id);
  };

  const saveTodo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${edit}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: value }),
      });
      const json = await response.json();
      const newTodos = todos.map((todo) => {
        if (todo.todo_id !== edit) {
          return todo;
        }
        return {
          todo_id: todo.todo_id,
          description: json.description,
        };
      });
      setEdit(0);
      setTodos(newTodos);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => getTodos(), []);

  return (
    <div className="mt-5">
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo) => (
                <tr key={todo.todo_id}>
                  <td>
                    {
                      edit === todo.todo_id
                        ? (
                          <input
                            className="form-controll"
                            onChange={(evt) => setValue(evt.currentTarget.value)}
                            value={value}
                          />
                        )
                        : `${todo.description}`
                    }
                  </td>
                  <td>
                    {
                      edit === todo.todo_id
                        ? <SaveTodo onClick={() => saveTodo()} />
                        : <EditTodo onClick={() => editTodo(todo)} />
                    }
                  </td>
                  <td>
                    {
                      edit === todo.todo_id
                        ? <CancelEditTodo onClick={() => setEdit(0)} />
                        : <DeleteTodo onClick={() => deleteTodo(todo.todo_id)} />
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>
    </div>
  );
};

export default ListTodos;
