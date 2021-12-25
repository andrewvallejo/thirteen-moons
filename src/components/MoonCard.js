import { useContext } from 'react'
import { GameContext } from '../utility/GameContext'
import { randomCover } from '../utility/util'

export const MoonCard = () => {
	const { state: { creationCard } } = useContext(GameContext)
	const { code, talent, terms, count, intervals } = creationCard

	return (
		<article className='moon-card' key={code} id={code}>
			<img className='card-image' alt='card' src={randomCover} />
			<ul className='card-content'>
				<li className='talent'>{talent}</li>
				<li className='terms'>{terms} </li>
				<li className='count'>{count}</li>
				<li className='terms'>{intervals}</li>
				<li className='talent mirrored'>{talent}</li>
			</ul>
		</article>
	)
}
