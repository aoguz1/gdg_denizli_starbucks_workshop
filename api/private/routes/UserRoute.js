import express from 'express';
import UserController from '../controller/UserController';

const app = express();

app.get('/', UserController.getUser);

module.exports = app;