import RegisterService from '../service/RegisterService';
import Util from '../../utils/utils';

const util = new Util();

/**
 * @typedef RegisterBody
 * @property {string} name
 * @property {string} surname
 * @property {string} phone
 * @property {string} password
 * @property {string} email
 */

class RegisterController {

	/**
	 * @route POST /account/v1/Register/
	 * @group Account / Authentication
	 * @summary bu route kullanıcı kayıt işlemlerini gerçekleştirir.
	 * @param {RegisterBody.model} body.body
	 * @returns {object} 200 - Success message
	 * @returns {Error} default - Unexpected error
	 */
	static async register(req, res) {
		try {
			const result = await RegisterService.register(req.body);

			console.log(result.type, result.message);
			if (result) {
				util.setSuccess(200, result.message, result.data);
				return util.send(res);
			}
			util.setError(200, result.message);
			return util.send(res);
		}
		catch (error) {
			util.setError(400, error.toString());
			return util.send(res);
		}
	}

}

export default RegisterController;
