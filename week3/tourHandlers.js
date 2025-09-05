// tourHandlers.js
const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  res.json(Tour.getAll());
};

const createTour = (req, res) => {
  const { name, info, image, price } = req.body;
  const newTour = Tour.addOne(name, info, image, price);
  res.status(201).json(newTour);
};

const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.tourId);
  if (!tour) return res.status(404).json({ message: "Tour not found" });
  res.json(tour);
};

const updateTour = (req, res) => {
  const updated = Tour.updateById(req.params.tourId, req.body);
  if (!updated) return res.status(404).json({ message: "Tour not found" });
  res.json(updated);
};

const deleteTour = (req, res) => {
  const deleted = Tour.deleteById(req.params.tourId);
  if (!deleted) return res.status(404).json({ message: "Tour not found" });
  res.json({ message: "Tour deleted" });
};

module.exports = { getAllTours, createTour, getTourById, updateTour, deleteTour };
