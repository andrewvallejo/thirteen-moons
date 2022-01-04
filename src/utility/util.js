import { cardData } from '../assets/data/cardData'
import { covers } from './cardCovers'

const randomize = (items) => Math.floor(Math.random() * items.length)

export const randomCover = covers[randomize(covers)]

export const shuffleDeck = (deck) => {
	const shuffledDeck = [...deck]
	for (let i = shuffledDeck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const temp = shuffledDeck[i]
		shuffledDeck[i] = shuffledDeck[j]
		shuffledDeck[j] = temp
	}
	return shuffledDeck
}


export const discardFour = (deck, cards) => {
	return deck.filter((card) => {
		const drawnCard = cards.map((card) => card)
		const leftover = card !== drawnCard.code
		return leftover
	})
}



export const drawHand = (deck) => {
	const handCount = 4
	const hand = deck.slice(0, handCount)
	return hand
}


export const swapCard = (uniqueCard) => {
	return cardData.map((card, index) => {
		if (card.code === uniqueCard.code) {
			return cardData.splice(index, 1, uniqueCard)
		} else {
			return card
		}
	})
}

