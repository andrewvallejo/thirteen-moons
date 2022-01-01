import { useContext, useState } from 'react'
import { GameContext } from '../utility/GameContext'
import { randomCover } from '../utility/util'

export const MoonCard = () => {
	const { state: { creationCard, gameStarted } } = useContext(GameContext)
	const { code, talent, terms, count, intervals } = creationCard
	const [ isFlipped, setIsFlipped ] = useState(false)

	const handleFlip = () => {
		if (gameStarted && !isFlipped) {
			setIsFlipped(true)
		} else {
			setIsFlipped(false)
		}
	}

	return (
		<article className={`moon-card ${isFlipped && 'flipped'}`} key={code} id={code} onClick={handleFlip}>
			<img className='card-image' alt='card' src={randomCover} />
			<div className='card-contents'>
				<ul className='card-traits'>
					<li className='talent'>{talent}</li>
					<li className='terms'>{terms} </li>
					<li className='count'>{count}</li>
					<li className='intervals'>{intervals}</li>
					<li className='talent mirrored'>{talent}</li>
				</ul>
			</div>
		</article>
	)
}
