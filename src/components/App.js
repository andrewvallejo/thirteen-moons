import React, { useEffect, useReducer  } from 'react';
import { MoonCard } from './MoonCard'
import { reducer, getAction as action  } from '../utility/reducer';
import { fetchDeck, cleanCards } from '../utility/api'
import { drawFour, shuffle, discard } from '../utility/util'

const initialState = {
  deck: [],
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      let cards = await fetchDeck()
      cards = cleanCards(cards)
      shuffle(cards)
      dispatch(action('deck', cards))
    })();
  }, []);

  const spread = () => {
    const cards = drawFour(state.deck)
    const remainingCards = discard(state.deck, cards)
    return cards
  }

 
    return (
       <main>
          <MoonCard deck={spread()} />
      </main> 
    )
}
