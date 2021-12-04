import db from '../../src/models/index';
import md5 from 'md5';
import {encryptText} from '../../src/config/settings';
class RegisterService {
  
	static async register(body){

		try {

			const foundUser = await db.Users.findOne({where: {
				email: body.email
			}});
			if (foundUser) {
				return {
					type: false,
					message: 'Email already use'
				};
			}

			const {password} = body;

			body['password'] = md5(md5(password) + encryptText);

			const registerResult = await db.Users.create(body);

			return {
				type: true,
				message: 'Registration done',
				data: registerResult
			};
		}
		catch (error) {
			throw error;
		}

	}

}
export default RegisterService;
