import {useContext, useEffect} from 'react'

import divider from '../assets/images/lavender-divider.png'
import {MoonCard} from '../components/MoonCard'
import {MoonLevels} from '../components/MoonLevels'
import {MoonMsgBar} from '../components/MoonMsgBar'
import {fetchDeck} from '../api/api'
import {GameContext} from '../store/GameContext'
import {drawHand, shuffleDeck} from '../utility/util'

export const GamePage = () => {
	const {state: {gameStarted, hand}, dispatch} = useContext(GameContext)

	useEffect(
		() => {
			if (!gameStarted) {
				fetchDeck()
					.then((deck) => {
						const shuffledDeck = shuffleDeck(deck)
						const hand = drawHand(shuffledDeck)
						dispatch({type: 'SET_HAND', hand})
					})
					.catch((error) => {
						console.log(error)
					})
			}
		},
		[gameStarted, dispatch]
	)

	const quote = 'Choose your destiny, child'

	const cards = hand.map((card) => <MoonCard key={card.code} card={card} />)

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
