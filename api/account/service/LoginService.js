/* eslint-disable camelcase */

import db from '../../src/models/index';
import md5 from 'md5';
import {encryptText} from '../../src/config/settings';
import jwt from 'jsonwebtoken';

class LoginService {

	static async login(body) {
		try {

			const md5ConvertPassword = md5(md5(body.password) + encryptText);
      
			const user = await db.Users.findOne({
				where: {email: body.email, password: md5ConvertPassword }
			});
  
			if (!user) {
				return {
					type: false,
					message: 'Email and password not correct'
				};
			}

			const token = jwt.sign({
				id: user.id,
				user_name: user.name
			}, md5(encryptText), {
				expiresIn: 1006400
			});

			const result = {
				name: user.name,
				surname: user.surname,
				token: token,
				email: user.email,
				star: user.star,
				balance: user.balance,
				gift_coffee: user.gift_coffee
			};
    
			return {
				type: true,
				message: 'Login success',
				data: result
			};
		}
		catch (error) {
			throw error;
		}
	}

}

export default LoginService;