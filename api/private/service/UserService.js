/* eslint-disable camelcase */
import db from '../../src/models';

class UserService {
 
	static async getUser(user_id) {
		try {
			const result = await db.Users.findOne({where: {id: user_id}}, {attributes: {
				exclude: [ 'password' ]
			}});

			return {
				type: true,
				message: 'user get success',
				data: result
			};
		}
		catch (error) {
			throw error;
		}
	}  

}

export default UserService;