import db from '../../src/models';

class OfferService {

	static async getAllOffer() {
		try {
			const result = await db.Offers.findAll({});
  
			return {
				type: true,
				message: 'Offers Received',
				data: result
			};
		}
		catch (error) {
			throw error;
		}
	}

}

export default OfferService;