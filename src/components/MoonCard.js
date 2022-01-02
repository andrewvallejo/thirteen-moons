import { useContext, useState } from 'react'
import { GameContext } from '../store/GameContext'
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
			<div className='card-contents'>
				<ul className={`card-traits ${isFlipped && 'flipped'}`}>
					<li className={`talent ${isFlipped && 'flipped'}`}>{talent}</li>
					<li className={`terms ${isFlipped && 'flipped'}`}>{terms} </li>
					<li className={`count ${isFlipped && 'flipped'}`}>{count}</li>
					<li className={`intervals ${isFlipped && 'flipped'}`}>{intervals}</li>
					<li className={`talent mirrored ${isFlipped && 'flipped'}`}>{talent}</li>
				</ul>
			</div>
			<img className='card-image' alt='card' src={randomCover} />
		</article>
	)
}
