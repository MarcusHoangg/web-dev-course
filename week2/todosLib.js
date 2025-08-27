
let todosArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
  const newTodo = { id: nextId++, task, completed, dueDate };
  todosArray.push(newTodo);
  return newTodo;
}

function getAll() {
  return todosArray;
}

function findById(id) {
  return todosArray.find(todo => todo.id === id) || null;
}

function updateOneById(id, updated) {
  const todo = findById(id);
  if (!todo) return null;
  if (updated.task !== undefined) todo.task = updated.task;
  if (updated.completed !== undefined) todo.completed = updated.completed;
  if (updated.dueDate !== undefined) todo.dueDate = updated.dueDate;
  return todo;
}

function deleteOneById(id) {
  const lenBefore = todosArray.length;
  todosArray = todosArray.filter(todo => todo.id !== id);
  return todosArray.length < lenBefore; // true nếu có xóa
}

// Test B4
if (require.main === module) {
  addOne("Mua đồ ăn", false, "2025-08-30"); // id=1
  addOne("Học React", false, "2025-09-01"); // id=2
  console.log("Ban đầu:", getAll());
  console.log("Xóa id=1:", deleteOneById(1));
  console.log("Sau khi xóa:", getAll());
  console.log("Xóa id=99:", deleteOneById(99)); // false
}

module.exports = { addOne, getAll, findById, updateOneById, deleteOneById };
