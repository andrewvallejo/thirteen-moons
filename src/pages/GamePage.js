import { useContext, useEffect } from 'react'
import { Spread } from '../components/Spread'
import { GameContext } from '../utility/GameContext'
import { drawHand } from '../utility/util'

export const GamePage = () => {
  const { state, dispatch } = useContext(GameContext)

  useEffect(() => {
    const hand = drawHand(state.deck)
    dispatch({state, action:{type:'UPDATE_HAND', value: hand}})
  }, [dispatch, state])

  return (<>{<Spread deck={state.deck} hand={state.hand} />}</>)
}
