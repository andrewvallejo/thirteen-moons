import React from 'react'

import divider from '../assets/lavender-divider.png'
import { Moon } from './Moon'

export const MoonLevels = () => {
	const moons = Array.from(Array(13), (moon, level) => <Moon id={level} key={level} />)

	return <article className='moon-levels'>{moons}</article>
}
