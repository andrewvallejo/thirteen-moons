import React from 'react'

import moonFace from '../assets/moon-face.png'

export const MoonMsgBar = () => {
	return (
		<article className='message-bar' key='moon'>
			<blockquote className='dialog'>Do you wish to craft a Moon Card?</blockquote>
			<img className='moon' alt='the face of the moon' src={moonFace} />
		</article>
	)
}
