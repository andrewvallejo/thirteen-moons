import { useContext, useState } from 'react'
import { GameContext } from '../store/GameContext'
import { randomCover } from '../utility/util'

export const MoonCard = ({ card }) => {
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
		<article className='container' key={code} id={code} onClick={handleFlip}>
			<div className={`card ${isFlipped && 'flipped'}`}>
				<div className='back'>
					<ul className='card-contents'>
						<li className='talent'>{talent}</li>
						<li className='count'>{count}</li>
						<li className='talent mirrored'>{talent}</li>
					</ul>

					<img className='card-image' alt='card' src={randomCover} />
				</div>
				<div>
					<ul className='card-contents'>
						<li className='talent'>{talent}</li>
						<li className='terms'>{terms} </li>
						<li className='count'>{count}</li>
						<li className='intervals'>{intervals}</li>
						<li className={`talent mirrored ${isFlipped && 'flipped'}`}>{talent}</li>
					</ul>
					<img className='card-image' alt='card' src={randomCover} />
				</div>
			</div>
		</article>
	)
}
