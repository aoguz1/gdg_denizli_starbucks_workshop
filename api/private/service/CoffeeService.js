/* eslint-disable camelcase */
import db from '../../src/models';

class CoffeeService {

	static async getCoffee(coffee_id, size_id) {
		try {
			const result = await db.CoffeeInfo.findOne({
				where: {
					coffee_id,
					size_id
				},
				attributes: [
					[ db.Sequelize.col('Coffee.image'), 'image' ],
					[ db.Sequelize.col('Coffee.coffee_name'), 'coffee_name' ],
					[ db.Sequelize.col('Coffee.desc'), 'desc' ],
					[ db.Sequelize.col('Size.name'), 'size_name' ],
					[ db.Sequelize.col('Size.size'), 'size' ],
					'price'
				],
				include: [
					{
						model: db.Coffees,
						attributes: []
					},
					{
						model: db.Sizes,
						attributes: []
					}
				]
			});

			return {
				type: true,
				message: 'All coffee info received',
				data: result
			};
		}
		catch (error) {
			throw error;
		}
	}

	static async getAllCoffee(size_id) {
		try {
			const result = await db.CoffeeInfo.findAll({
				where: {
					size_id
				},
				attributes: [
					[ db.Sequelize.col('Coffee.image'), 'image' ],
					[ db.Sequelize.col('Coffee.coffee_name'), 'coffee_name' ],
					'price'
				],
        
				include: [
					{
						model: db.Coffees,
						attributes: []
					}
				]
			});
  
			return {
				type: true,
				message: 'Coffee Info Received',
				data: result
			};
		}
		catch (error) {
			throw error;
		}
	}

}

export default CoffeeService;