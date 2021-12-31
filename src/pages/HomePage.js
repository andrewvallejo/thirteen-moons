import { Link } from 'react-router-dom'
import { MoonMsgBar } from '../components/MoonMsgBar'

export const HomePage = () => {
	const quote = 'Choose your destiny, child'
	return (
		<main className='home-page'>
			<header className='home-header'>
				<MoonMsgBar quote={quote} />
			</header>
			<section className='main-section'>
				<Link className='view-game button' to='/lunares'>
					Begin Game
				</Link>
				<Link className='view-home button' to='/creation'>
					Create a moon card
				</Link>
				<Link className='view-collection button' to='/collection'>
					See your collection
				</Link>`
			</section>
		</main>
	)
}
