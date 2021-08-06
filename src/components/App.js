import React, { useEffect, useReducer  } from 'react';
import { MoonCard } from './MoonCard'
import { reducer, getAction as action  } from '../utility/reducer';
import { fetchDeck, cleanCards } from '../utility/api'

const initialState = {
  deck: []
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      let cards = await fetchDeck()
      cards = cleanCards(cards)
      dispatch(action('deck', cards))
    })();
  }, []);
 
    return (
       <main>
          <MoonCard deck={state.deck} />
      </main> 
    )
}
