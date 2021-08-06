import React, { useEffect, useReducer  } from 'react';
import { MoonCard } from './Card'
import { reducer } from '../utility/reducer';
import { fetchDeck } from '../utility/api'

const initialState = {
  deck: []
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      const cards = await fetchDeck()
      const action = {type: 'ADD_DECK', deck: cards}  
      dispatch(action)
    })();
  }, []);
 
    return (
       <main>
          <MoonCard deck={state.deck} />
      </main> 
    )
}
