// tourLib.js
let tours = [];
let currentId = 1;

function addOne(name, info, image, price) {
  const newTour = { id: currentId++, name, info, image, price };
  tours.push(newTour);
  return newTour;
}

function getAll() {
  return tours;
}

function findById(id) {
  return tours.find((tour) => tour.id === parseInt(id));
}

function updateById(id, updatedData) {
  const tour = findById(id);
  if (!tour) return null;
  Object.assign(tour, updatedData);
  return tour;
}

function deleteById(id) {
  const index = tours.findIndex((tour) => tour.id === parseInt(id));
  if (index === -1) return null;
  return tours.splice(index, 1);
}

module.exports = { addOne, getAll, findById, updateById, deleteById };
