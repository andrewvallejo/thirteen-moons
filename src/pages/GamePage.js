import { useContext, useEffect } from 'react'

import divider from '../assets/lavender-divider.png'
import { MoonCard } from '../components/MoonCard'
import { MoonLevels } from '../components/MoonLevels'
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

	const cards = state.hand.map((card) => <MoonCard key={card.id} card={card} />)

	return (
		<main className='game-page'>
			<header className='game-header'>
				<MoonMsgBar quote={quote} />
			</header>
			<section className='spread'>{cards}</section>
			<footer className='levels'>
				<img src={divider} alt='divider' className='divider' />
				<MoonLevels />
			</footer>
		</main>
	)
}
