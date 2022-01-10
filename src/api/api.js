const axios = require('axios')

export const fetchDeck = async () => {
	let config = {
		method: 'get',
		url: 'http://moon-cards-api.vercel.app/cards',
		headers: {
			'Content-Type': 'application/json'
		}
	}
	try {
		const response = await axios(config)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
