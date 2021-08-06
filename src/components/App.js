import React, { useEffect, useReducer  } from 'react';
import { reducer, getAction as action  } from '../utility/reducer';
import { fetchDeck, cleanCards } from '../utility/api'
import { shuffle, drawHand } from '../utility/util'
import { Spread } from './Spread';

const initialState = {
  deck: [],
  hand: []
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      let cards = await fetchDeck()
      cards = cleanCards(cards)
      shuffle(cards)
      let {currentDeck: deck, currentHand:hand} = drawHand(cards)
      dispatch(action(deck.type, deck.deck))
      dispatch(action(hand.type, hand.deck))
    })();
  }, []);
 
  const updateDeck = (currentDeck) => {
    let {currentDeck: deck, currentHand:hand} = drawHand(currentDeck)
    dispatch(action(deck.type, deck.deck))
    dispatch(action(hand.type, hand.deck))
  }

    return (
       <main>
          <Spread deck={state.deck} hand={state.hand} draw={updateDeck}/>
      </main> 
    )
}
