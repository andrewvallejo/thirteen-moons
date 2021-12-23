import { dialogData } from '../dialogData'
import { covers } from './cardCovers'

export const randomize = (items) => Math.floor(Math.random() * items.length)

export const randomCover = covers[randomize(covers)]

export const shuffle = (deck) => deck.sort(() => Math.random() - 0.5)

export const drawFour = (deck) => deck.splice(-4).map((card) => card)

export const discardFour = (deck, cards) => {
	return deck.filter((card) => {
		const drawnCard = cards.map((card) => card)
		const leftover = card !== drawnCard.code
		return leftover
	})
}

export const drawHand = (deck) => {
	const cards = drawFour(deck)
	const currentDeck = discardFour(deck, cards)
	const actions = {
		currentDeck: { type: 'currentDeck', deck: currentDeck },
		currentHand: { type: 'hand', deck: cards }
	}
	return actions
}

export const swapCard = (uniqueCard) => {
	return dialogData.map((card, index) => {
		if (card.code === uniqueCard.code) {
			return dialogData.splice(index, 1, uniqueCard)
		} else {
			return card
		}
	})
}

export const updateCardInfo = (cards) => {
	const updatedCards = cards.map((card) => {
		const { code, talent, terms, count, intervals } = card
		const newCard = {
			code: code,
			talent: talent,
			count: count,
			terms: terms,
			intervals: intervals
		}
		return newCard
	})
	return updatedCards
}
