import React, { useContext, useEffect } from 'react'

import moon from '../assets/images/moon.png'
import { useState } from 'react'
import { GameContext } from '../store/GameContext'

export const Moon = ({ id }) => {
	const [isActive, setActive] = useState(false)
	const { state } = useContext(GameContext)

	useEffect(
		() => {
			if (state.level === id + 1 && !isActive && state.level > 1) {
				setActive(true)
			}
		},
		[id, isActive, state.level]
	)

	return <img alt='moon' src={moon} key={'moon'} className={`moon ${!isActive && 'disabled'}`} />
}
