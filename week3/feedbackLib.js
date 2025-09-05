let feedbacks = [];
let idCounter = 1;

function addOne(sender, message, rating) {
  const feedback = { id: idCounter++, sender, message, rating };
  feedbacks.push(feedback);
  return feedback;
}

function getAll() {
  return feedbacks;
}

function findById(id) {
  return feedbacks.find((fb) => fb.id === id);
}

function updateOne(id, newData) {
  const fb = feedbacks.find((f) => f.id === id);
  if (!fb) return null;
  Object.assign(fb, newData);
  return fb;
}

function deleteOne(id) {
  const index = feedbacks.findIndex((f) => f.id === id);
  if (index === -1) return null;
  return feedbacks.splice(index, 1)[0];
}

module.exports = { addOne, getAll, findById, updateOne, deleteOne };
