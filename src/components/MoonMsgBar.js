import React from 'react'
import { Link } from 'react-router-dom'

import moonFace from '../assets/images/moon-face.png'

export const MoonMsgBar = ({ quote }) => {
	return (
		<article className='message-bar' key='moon'>
			<blockquote className='dialog'>{quote}</blockquote>
			<Link to='/'>
				<img className='moon' alt='the face of the moon' src={moonFace} />
			</Link>
		</article>
	)
}
