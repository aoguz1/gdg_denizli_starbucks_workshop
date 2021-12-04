import express from 'express';
import CoffeeController from '../controller/CoffeeController';

const app = express();

app.get('/getAllCoffee/:sizeId', CoffeeController.getAllCoffee);
app.get('/:coffeeId/:sizeId', CoffeeController.getCoffee);

module.exports = app;