import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { swaggerOptions } from './src/config/settings';
import accountRoute from './account';
import privateRoute from './private';

const app = express();
const  expressSwagger = require('express-swagger-generator')(app);
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/health', async (req, res) => {

	res.json({
		type: true,
		message: 'OK!'
	});

});
app.use('/account', accountRoute);
app.use('/private', privateRoute);

expressSwagger(swaggerOptions);

app.listen(port, () => {

	console.log('server is running on port ', port);

});
export default app;