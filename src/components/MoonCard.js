import { useContext } from 'react'
import { GameContext } from '../utility/GameContext'
import { randomCover } from '../utility/util'

export const MoonCard = () => {
	const { state: { creationCard } } = useContext(GameContext)
	const { code, talent, terms, count, intervals } = creationCard

	return (
		<article className='moon-card' key={code} id={code}>
			<section className='inner-card'>
				<img className='card-back' alt='card' src={randomCover} />
				<div className='darken' />
				<div className='overlay' />
				{/*  */}
				<section className='card-front'>
					<div className='card-content'>
						<h2 className='talent'>{talent}</h2>
						<h3 className='terms'>
							{terms}
							<span className='count'>{count}</span>
							{intervals}
						</h3>
						<h3 className='talent mirrored'>{talent}</h3>
					</div>
				</section>
				{/*  */}
			</section>
		</article>
	)
}
