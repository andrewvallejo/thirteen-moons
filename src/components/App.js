import React, { useEffect, useReducer  } from 'react';
import { MoonCard } from './MoonCard'
import { reducer, getAction as action  } from '../utility/reducer';
import { fetchDeck, cleanCards } from '../utility/api'
import { shuffle, spread} from '../utility/util'

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
 
  const updateDeck = (action) => {
    const {type, deck} = action
    dispatch(action(type, deck))
  }

    return (
       <main>
          <MoonCard deck={state.deck} draw={updateDeck} />
      </main> 
    )
}
