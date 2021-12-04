/* eslint-disable camelcase */
import UserService from '../service/UserService';
import Util from '../../utils/utils';

const util = new Util();
class UserController {

	/**
	 * @route GET /private/v1/User/
	 * @group private/User
	 * @summary bu route kullanıcı bilgilerini getirir.
	 * @returns {object} 200 - Success message 
	 * @returns {Error} default - Unexpected error 
	 */
	static async getUser(req, res){
		try {

			const user_id = req.decoded.id;
			const result = await UserService.getUser(user_id);
			if (!result.type) {
				util.setError(200, result.message);
				return util.send(res);
			}
			util.setSuccess(200, result.message, result.data);
			return util.send(res);
		}
		catch (error) {
        
			util.setError(400, error.message);
			return util.send(res);  
		}
	}

}
export default UserController;