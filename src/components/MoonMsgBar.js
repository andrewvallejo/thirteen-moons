import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import moonFace from '../assets/images/moon-face.png'
import { GameContext } from '../store/GameContext'

export const MoonMsgBar = ({ quote }) => {
	const { dispatch } = useContext(GameContext)
	const navigate = useNavigate()

	const handleClick = () => {
		dispatch({ type: 'SET_GAME', gameStarted: false })
		navigate('/')
	}
	return (
		<article className='message-bar' key='moon'>
			<blockquote className='dialog'>{quote}</blockquote>
			<button onClick={handleClick}>
				<img className='moon' alt='the face of the moon' src={moonFace} />
			</button>
		</article>
	)
}
