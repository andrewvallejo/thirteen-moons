import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

import { GameContext } from '../store/GameContext'
import { randomCover } from '../utility/util'

export const MoonCard = ({ card }) => {
	const { state: { creationCard, gameStarted }, dispatch } = useContext(GameContext)
	const [isFlipped, setFlipped] = useState(true)
	const [clicks, setClicks] = useState(0)

	const [nextClass, setNextClass] = useState('next hidden')
	const mooncard = card || creationCard

	const { code, talent, terms, count, intervals } = mooncard

	let location = useLocation().pathname
	const navigate = useNavigate()

	useEffect(
		() => {
			if (gameStarted) {
				setFlipped(false)
			}
		},
		[gameStarted]
	)

	const handleFlip = () => {
		let level = location.split('/')[2]
		setClicks(clicks + 1)
		if (!level) {
			level = 1
		}
		if (gameStarted && !isFlipped && clicks === 1) {
			setFlipped(true)
		}
		if (clicks === 2) {
			setNextClass('next')
			setClicks(clicks + 1)
		}
		if (clicks === 3) {
			setClicks(clicks + 1)
			level++
			dispatch({ type: 'SET_LEVEL', level: level })
			navigate(`/lunares/${level}`)
		}
	}

	return (
		<article className='card' key={code} id={code} onClick={handleFlip}>
			<div className={`card-container ${isFlipped && 'flipped'}`}>
				<div>
					<ul className='card-contents'>
						<li className='talent'>{talent}</li>
						<li className='count'>{count}</li>
						<li className='talent mirrored'>{talent}</li>
					</ul>
					<img className='card-image' alt='card' src={randomCover} />
				</div>
				<div className='back'>
					<ul className='card-contents'>
						<li className='talent'>{talent}</li>
						<li className='terms'>{terms} </li>
						<li className='count'>{count}</li>
						<li className={nextClass}>Attempt?</li>
						<li className='intervals'>{intervals}</li>
						<li className={`talent mirrored ${isFlipped && 'flipped'}`}>{talent}</li>
					</ul>
					<img className='card-image' alt='card' src={randomCover} />
				</div>
			</div>
		</article>
	)
}
