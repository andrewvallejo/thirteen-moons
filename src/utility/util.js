import { covers } from "./cardCovers";

export const randomize = (items) => Math.floor(Math.random() * items.length);

export const createCover = () => covers[randomize(covers)];

export const shuffle = (deck) => deck.sort(() => Math.random() - 0.5)

export const drawFour = (deck) => deck.splice(-4).map((card) => card)

export const discardFour = (deck, cards) => {
  return deck.filter((card) => {
    const drawnCard = cards.map((card) => card)
    const leftover = card !== drawnCard.abrv
    return leftover
  })
}

export const drawHand = (deck) => {
  const cards = drawFour(deck)
  const currentDeck = discardFour(deck, cards)
  const actions = {
   currentDeck: {type: 'currentDeck', deck: currentDeck},
   currentHand: {type: 'hand', deck: cards}
}
  return actions
}

