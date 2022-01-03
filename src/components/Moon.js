import React, { useEffect } from 'react'

import moon from '../assets/images/moon.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Moon = ({ id }) => {
	const [isInactive, setInactive] = useState(false)
	const location = useLocation().pathname.split('/')[2]

	useEffect(
		() => {
			if (location <= id && !isInactive) {
				setInactive(true)
			}
		},
		[id, isInactive, location]
	)

	return <img alt='moon' src={moon} key={'moon'} className={`moon ${isInactive && 'inactive'}`} />
}
