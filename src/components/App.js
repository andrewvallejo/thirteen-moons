import React, { useEffect, useReducer  } from 'react';
import { Route, Switch } from "react-router-dom";
import { Spread } from './Spread';
import { reducer, getAction as action  } from '../utility/reducer';
import { fetchDeck, cleanCards } from '../utility/api'
import { shuffle, drawHand } from '../utility/util'
import { Creation } from './Creation';
import { dialogData } from '../dialogData';
import { Collection } from './Collection';

const initialState = {
  deck: [],
  hand: [],
  error: ''
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
    })()
    .catch(error => sendError('error', 'Server is down, sorry. The stars must not be aligned.'))
  }, []);
 
  const updateDeck = (currentDeck) => {
    if(!currentDeck) sendError('No cards found')
    let {currentDeck: deck, currentHand: hand} = drawHand(currentDeck)
    dispatch(action(deck.type, deck.deck))
    dispatch(action(hand.type, hand.deck))
  }

  const updateCards = (page) => {
    shuffle(dialogData)
   page === 'lunares' ? updateDeck(dialogData) : dispatch(action('currentDeck', dialogData))
  }

  const sendError = (errorMsg) => {
    dispatch('error', errorMsg)
  }
  
    return (
        <Switch>
          <>
          <main>
            {state.error &&  sendError('Server is down')}
            <Route path='/lunares/'>
              <Spread deck={state.deck} hand={state.hand} draw={updateCards}/>
            </Route>
            <Route exact path='/'>
              <Creation update={updateCards}/>
            </Route>
            <Route exact path='/collection/'>
              <Collection deck={state.deck}/>
            </Route>
          </main> 
          </>
      </Switch>
    )
}
