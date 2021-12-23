import React from 'react'

import { MoonCard } from '../MoonCard'
import { MoonLevel } from './MoonLevel'
import { MoonMsgBar } from '../MoonMsgBar'

export const Spread = ({ deck, hand }) => {
	return (
		<section className='card-spread'>
			<MoonMsgBar />
			<MoonLevel levels={deck} />
			<div className='card-containers'>
				<MoonCard cards={hand} />
			</div>
		</section>
	)
}
