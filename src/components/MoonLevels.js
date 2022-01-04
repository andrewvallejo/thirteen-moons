import React from 'react'

import { Moon } from './Moon'

export const MoonLevels = () => {
	const moons = Array.from(Array(13), (_, level) => <Moon id={level + 1} key={level} />)

	return <article className='moon-levels'>{moons}</article>
}
