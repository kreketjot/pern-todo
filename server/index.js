const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

/* middleware */
app.use(cors());
app.use(express.json());

/* routes */
// create todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const todo = await pool.query(
      'insert into todo (description) values($1) returning *',
      [description],
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query(
      'select * from todo',
    );
    todos.rows.sort((a, b) => a.todo_id - b.todo_id);
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

// get todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(
      `select * from todo where todo_id = ${id}`,
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// update todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const todo = await pool.query(
      `update todo set description = '${description}' where todo_id = ${id} returning *`,
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// delete todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(
      `delete from todo where todo_id = ${id} returning *`,
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

app.listen(5000, () => {
  console.log('server has started at port 5000');
});
