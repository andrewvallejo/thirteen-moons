import React, { useEffect, useReducer  } from 'react';
import { Route, Switch } from "react-router-dom";
import { Spread } from './Spread';
import { reducer, getAction as action  } from '../utility/reducer';
import { fetchDeck, cleanCards } from '../utility/api'
import { shuffle, drawHand, updateCardInfo } from '../utility/util'
import { Creation } from './Creation';
import { dialogData } from '../dialogData';

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

  const updateCards = () => {
    shuffle(dialogData)
    updateDeck(dialogData)
  }

    return (
        <Switch>
        <>
            <main>
          <Route exact path='/'>
              <Creation update={updateCards}/>
          </Route>
              <Route path='/lunares/quarum/'>
                <Spread  deck={state.deck} hand={state.hand} draw={updateDeck}/>
              </Route>
            </main> 
            </>
        </Switch>
    )
}
