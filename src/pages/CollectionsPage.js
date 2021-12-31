import { MoonMsgBar } from '../components/MoonMsgBar'

export const CollectionPage = () => {
	const quote = 'Choose your destiny, child'
	return (
		<main className='home-page'>
			<header className='home-header'>
				<MoonMsgBar quote={quote} />
			</header>
		</main>
	)
}
