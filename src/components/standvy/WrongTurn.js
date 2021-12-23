import React from 'react'
import { Link } from 'react-router-dom'

import { MoonMsgBar } from '../MoonMsgBar'

export const WrongTurn = () => {
	return (
		<section className='error-page'>
			<MoonMsgBar />
			<article className='error-field'>
				<h2> You have found yourself going the wrong way</h2>
				<Link to='/'>
					<button className='error-button'>Return</button>
				</Link>
			</article>
		</section>
	)
}
