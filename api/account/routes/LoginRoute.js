import express from 'express';
import LoginController from '../controller/LoginController';

const app = express();

app.post('/', LoginController.login);

module.exports = app;