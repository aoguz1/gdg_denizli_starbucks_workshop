
import LoginService from '../service/LoginService';
import Util from '../../utils/utils';

const util = new Util();

/**
 * @typedef LoginReq 
 * @property {string} email
 * @property {string} password
 */
class LoginController {

	/**
	 * @route POST /account/v1/Login/
	 * @group Account / Authentication
	 * @summary Kullanıcı bu route üzerinden giriş yapar
	 * @param {LoginReq.model} body.body 
	 * @returns {object} 200 - Success message 
	 * @returns {Error} default - Unexpected error 
	 */
	static async login(req, res){
		try {
			const result = await LoginService.login(req.body);
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

export default LoginController;
