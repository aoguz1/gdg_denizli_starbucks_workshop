import express from 'express';
import path from 'path';
import Helpers from '../utils/helpers';
import jwt from 'jsonwebtoken';
import {encryptText} from '../src/config/settings';
import md5 from 'md5';
import Utils from '../utils/utils';

const app = express();
const util = new Utils();
const basename = path.basename(__filename);

app.use(async (req, res, next)=>{
  
	const token = req.headers.authorization;

	jwt.verify(token, md5(encryptText), async(err, decoded)=>{
		if (err) {
			util.setError(401, 'Your access denied');
			return util.send(res);
		}
  
		req.decoded = decoded;
		next();
	});
  
});

const folderRoute = `${__dirname}/routes`;
require('fs')
	.readdirSync(folderRoute)
	.filter((file) => {

		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);

	})
	.forEach((file) => {

		const routeName = Helpers.getFileRoute(file);
	
		app.use(
			`/v1/${routeName}`,
			require(folderRoute + path.sep + file.split('.')[0])
		);
	
	});

module.exports = app;
