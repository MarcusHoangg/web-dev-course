const express = require('express');
const app = express();
app.use(express.json());

const carHandlers = require('./carHandlers');   // đã làm phần 1
const todoHandlers = require('./todoHandlers'); // thêm dòng này

// Cars
app.get('/cars', carHandlers.getAllCars);
app.get('/cars/:carId', carHandlers.getCarById);
app.post('/cars', carHandlers.createCar);
app.put('/cars/:carId', carHandlers.updateCar);
app.delete('/cars/:carId', carHandlers.deleteCar);

// Todos
app.get('/todos', todoHandlers.getAllTodos);
app.get('/todos/:id', todoHandlers.getTodoById);
app.post('/todos', todoHandlers.createTodo);
app.put('/todos/:id', todoHandlers.updateTodo);
app.delete('/todos/:id', todoHandlers.deleteTodo);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
