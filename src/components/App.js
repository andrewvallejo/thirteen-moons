import React, { useEffect, useReducer  } from 'react';
import { MoonCard } from './MoonCard'
import { reducer, getAction as action  } from '../utility/reducer';
import { fetchDeck } from '../utility/api'


const initialState = {
  deck: []
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      const cards = await fetchDeck()
      dispatch(action('deck', cards))
    })();
  }, []);
 
    return (
       <main>
                 <MoonCard deck={state.deck} />
      </main> 
    )
}
