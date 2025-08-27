// carHandlers.js
const Car = require('./carLib'); // import các hàm từ carLib.js

// Lấy tất cả xe
const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
};

// Tạo xe mới
const createCar = (req, res) => {
  const { model, color, age } = req.body;
  const newCar = Car.addOne(model, color, age);
  if (newCar) res.json(newCar);
  else res.status(500).json({ message: 'Failed to create car' });
};

// Lấy xe theo ID
const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) res.json(car);
  else res.status(404).json({ message: 'Car not found' });
};

// Cập nhật xe theo ID
const updateCar = (req, res) => {
  const carId = req.params.carId;
  const { model, color, age } = req.body;
  const updatedCar = Car.updateOneById(carId, { model, color, age });
  if (updatedCar) res.json(updatedCar);
  else res.status(404).json({ message: 'Car not found' });
};

// Xoá xe theo ID
const deleteCar = (req, res) => {
  const carId = req.params.carId;
  const isDeleted = Car.deleteOneById(carId);
  if (isDeleted) res.json({ message: 'Car deleted successfully' });
  else res.status(404).json({ message: 'Car not found' });
};

// Export ra để app.js dùng
module.exports = { getAllCars, createCar, getCarById, updateCar, deleteCar };
