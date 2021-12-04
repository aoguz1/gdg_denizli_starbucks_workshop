/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import chai from 'chai';
import chaiHttp from 'chai-http';
import api from '../';

const registerRoute = '/account/v1/Register';

chai.use(chaiHttp);
chai.should();
describe('news get post', async () => {
	it('news post', (done) => {
		chai
			.request(api)
			.post(registerRoute)
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({
				name: 'Abdullah',
				surname: 'Oğuz',
				email: 'oguzabdullah39@gmail.com',
				phone: '00000000',
				password: '123456'
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.should.have.status(200);
				res.should.be.a('object');
				res.body.should.have.keys('status', 'message', 'data');
				res.body.should.have.property('status').equal(true);
				done();
			});
	});
});
