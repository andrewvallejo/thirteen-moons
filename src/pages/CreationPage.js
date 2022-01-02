import { CreationForm } from '../components/CreationForm'
import { MoonCard } from '../components/MoonCard'
import { MoonMsgBar } from '../components/MoonMsgBar'
import { Rulebook } from '../components/Rulebook'

export const CreationPage = () => {
	return (
		<main className='creation-page'>
			<header className='creation-header'>
				<MoonMsgBar />
			</header>
			<section className='creation-section'>
				<section className='card-section'>
					<MoonCard />
				</section>
				<CreationForm />
				<Rulebook />
			</section>
		</main>
	)
}
