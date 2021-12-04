import Util from '../../utils/utils';
import OfferService from '../service/OfferService';

const util = new Util();
class OfferController {

	/**
	 * @route GET /private/v1/Offer/
	 * @group private/Offer
	 * @summary kampanyaları getirir.
	 * @returns {object} 200 - Success message 
	 * @returns {Error} default - Unexpected error 
	 */
	static async getAllOffers(req, res){
		try {
			const result = await OfferService.getAllOffer();
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

export default OfferController;