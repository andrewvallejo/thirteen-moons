export const deckUrl = 'https://deckofcardsapi.com/api/deck/new/'
export const drawUrl = (id) => `https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`

export const fetchDeck = (async () => {
  const {deck_id} = await fetchApi(deckUrl)
  const cards = fetchApi(drawUrl(deck_id))
  .then((data) => data.cards)
  return cards
})

export const fetchApi = (async (url) => {
  return ( 
    await fetch(url)
      .then ((response) => response.json())
   )
})