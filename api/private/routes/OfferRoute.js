import express from 'express';
import OfferController from '../controller/OfferController';

const app = express();

app.get('/', OfferController.getAllOffers);

module.exports = app;