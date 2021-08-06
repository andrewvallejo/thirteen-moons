export const deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

export const fetchDeck = (async () => {
  const {deck_id} = await fetchApi(deckUrl)
  const cards = fetchApi(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
  .then((data) => data.cards)
  return cards
})

export const fetchApi = (async (url) => {
  return await fetch(url)
   .then ((response) => response.json())
   })