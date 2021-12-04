/* eslint-disable camelcase */
import Util from '../../utils/utils';
import CoffeeService from '../service/CoffeeService';

const util = new Util();
class CoffeeController {

	/**
	 * @route GET /private/v1/Coffee/{coffeeId}/{sizeId}
	 * @group private/Coffee
	 * @summary bu route kahve bilgilerini getirir.
	 * @param {number} coffeeId.path
	 * @param {number} sizeId.path
	 * @returns {object} 200 - Success message
	 * @returns {Error} default - Unexpected error
	 */
	static async getCoffee(req, res){
		try {
			const coffee_id = req.params.coffeeId;
			const size_id = req.params.sizeId;
      
			const result = await CoffeeService.getCoffee(coffee_id, size_id);
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

	/**
	 * @route GET /private/v1/Coffee/getAllCoffee/{sizeId}
	 * @group private/Coffee
	 * @summary girilen değere göre kahve bilgilerini getirir.
	 * @param {number} sizeId.path
	 * @returns {object} 200 - Success message 
	 * @returns {Error} default - Unexpected error 
	 */
 
	static async getAllCoffee(req, res){
	
		try {
			const coffee_size = req.params.sizeId;
			const result = await CoffeeService.getAllCoffee(coffee_size);
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

export default CoffeeController;