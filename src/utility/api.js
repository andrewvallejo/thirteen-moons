export const deckUrl = 'https://deckofcardsapi.com/api/deck/new/'
export const drawUrl = (id, remaining) => `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${remaining}`

export const fetchDeck = (async () => {
  const {deck_id, remaining} = await fetchApi(deckUrl)
  const cards = fetchApi(drawUrl(deck_id, remaining))
  .then((data) => data.cards)
  return cards
})

export const fetchApi = (async (url) => {
  return ( 
    await fetch(url)
      .then((response) => response.json())
      .catch(error => console.error('Can not reach server.'))
  
   )
})

export const cleanCards = (cards) => {
  const cleanedCards = cards.map((card) => {
   let {value, suit} = card

   if (value === 'ACE') value = 1
   if (value === 'JACK') value = 11
   if (value === 'QUEEN') value = 12
   if (value === 'KING') value = 13
   
   if (suit === 'SPADES') suit = 'vitality' 
   if (suit === 'DIAMONDS') suit = 'spirit' 
   if (suit === 'CLUBS') suit = 'wisdom' 
   if (suit === 'HEARTS') suit = 'mind' 
 
   const newCard = {
      count: parseInt(value),
      talent: suit,
      code: suit[0] + value
   } 
   return newCard
  })
  return cleanedCards
}