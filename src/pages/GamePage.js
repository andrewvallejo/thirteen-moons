import { useContext, useEffect } from 'react'

import { MoonMsgBar } from '../components/MoonMsgBar'
import { fetchDeck } from '../utility/api'
import { GameContext } from '../utility/GameContext'
import { drawHand } from '../utility/util'

export const GamePage = () => {
	const { state, dispatch } = useContext(GameContext)
	const { gameStarted } = state

	useEffect(
		() => {
			if (!gameStarted) {
				fetchDeck().then((deck) => {
					dispatch({ type: 'SET_DECK', deck })
					dispatch({ type: 'SET_HAND', hand: drawHand(deck) })
					dispatch({ type: 'SET_CREATION_CARD', creationCard: deck[0] })
					dispatch({ type: 'SET_GAME_STARTED', gameStarted: true })
				})
			}
		},
		[ gameStarted, dispatch ]
	)

	const quote = 'Choose your destiny, child'

	return (
		<main className='home-page'>
			<header className='home-header'>
				<MoonMsgBar quote={quote} />
			</header>
			<section className='main-section'>{/* {<Spread deck={state.deck} hand={state.hand} />} */}</section>
		</main>
	)
}
