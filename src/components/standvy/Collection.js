import React from 'react'
import { Link } from 'react-router-dom'

import { MoonCard } from '../MoonCard'
import { MoonMsgBar } from '../MoonMsgBar'

export const Collection = ({ deck }) => {
	return (
		<section className='card-collection'>
			<MoonMsgBar />
			<div className='card-containers'>
				<MoonCard cards={deck} />
			</div>
			<Link className='back-button' to='/'>
				Go Back
			</Link>
		</section>
	)
}
