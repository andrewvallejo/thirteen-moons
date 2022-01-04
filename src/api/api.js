import { cardData } from "../assets/data/cardData"

const deckUrl = 'https://deckofcardsapi.com/api/deck/new/'
const drawUrl = (id, remaining) => `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${remaining}`

export const fetchDeck = async () => {
	const { deck_id, remaining } = await fetchApi(deckUrl)
	const cards = fetchApi(drawUrl(deck_id, remaining)).then(({ cards }) => {
		return cleanCards(cards)
	})
	return cards
}

const fetchApi = async (url) => {
	return await fetch(url).then((response) => response.json()).catch((error) => console.error('Can not reach server.'))
}

const cleanCards = (cards) => {
	return cards.map((card) => {
		let { value, suit } = card

		if (value === 'ACE') value = 1
		if (value === 'JACK') value = 11
		if (value === 'QUEEN') value = 12
		if (value === 'KING') value = 13

		if (suit === 'SPADES') suit = 'vitality'

		if (suit === 'DIAMONDS') suit = 'spirit'
		if (suit === 'CLUBS') suit = 'wisdom'
		if (suit === 'HEARTS') suit = 'mind'

		const newCard = {
			code: suit[0] + value,
			talent: suit,
			count: parseInt(value)
		}

		updateCardInfo(newCard)
		return newCard
	})
}
const updateCardInfo = (card) => {
	return cardData.map((data) => {
		if (data.code === card.code) {
			card.terms = data.terms
			card.intervals = data.intervals
		}
		return card
	})

}
