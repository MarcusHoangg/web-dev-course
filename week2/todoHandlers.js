
const Todos = require('./todosLib');


const getAllTodos = (req, res) => {
  res.json(Todos.getAll());
};


const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTodo = Todos.addOne(task, completed, dueDate);
  if (newTodo) res.json(newTodo);
  else res.status(500).json({ message: 'Failed to create todo' });
};


const getTodoById = (req, res) => {
  const id = Number(req.params.id);
  const todo = Todos.findById(id);
  if (todo) res.json(todo);
  else res.status(404).json({ message: 'Todo not found' });
};

const updateTodo = (req, res) => {
  const id = Number(req.params.id);
  const updated = Todos.updateOneById(id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ message: 'Todo not found' });
};


const deleteTodo = (req, res) => {
  const id = Number(req.params.id);
  const ok = Todos.deleteOneById(id);
  if (ok) res.json({ message: 'Todo deleted successfully' });
  else res.status(404).json({ message: 'Todo not found' });
};

module.exports = { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo };
