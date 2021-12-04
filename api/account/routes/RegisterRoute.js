import express from 'express';
import RegisterController from '../controller/RegisterController';

const app = express();

app.post('/', RegisterController.register);

module.exports = app;