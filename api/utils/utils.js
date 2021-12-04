export default class Util {

	constructor() {

		this.statusCode = null;
		this.type = null;
		this.data = null;
		this.message = null;
	
	}

	setSuccess(statusCode, message, data) {
		this.statusCode = statusCode;
		this.message = message;
		this.data = data;
		this.type = true;
	}

	setError(statusCode, message) {
		this.statusCode = statusCode;
		this.message = message;
		this.type = false;
	}

	send(res) {

		const result = {
			status: this.type,
			message: this.message,
			data: this.data
		};
		if (this.type) {

			return res.status(this.statusCode).json(result);
		
		}
		return res.status(this.statusCode).json({
			status: this.type,
			message: this.message
		});
	
	}

}
