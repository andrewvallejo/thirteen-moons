import React, { useEffect, useReducer } from 'react'
import { Route } from 'react-router-dom'

// import { CollectionPage } from './pages/CollectionsPage'
import { CreationPage } from './pages/CreationPage'
// import { GamePage } from './pages/GamePage'
import { cleanCards, fetchDeck } from './utility/api'
import { GameContext } from './utility/GameContext'
import { reducer } from './utility/reducer'

const initialState = {
	deck: [],
	hand: [],
	creationCard: []
}

export const App = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState)

	useEffect(
		() => {
			!state.deck.length &&
				(async () => {
					await fetchDeck().then((cards) => {
						let cleanedCards = cleanCards(cards)
						dispatch({ state, action: { type: 'ADD_DECK', value: cleanedCards } })
					})
				})()
		},
		[ state ]
	)

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			<main>
				{/* <Route path="/lunares/" component={GamePage} /> */}
				<Route exact path='/' component={CreationPage} />
				{/* <Route exact path="/collection/" component={CollectionPage} /> */}
			</main>
		</GameContext.Provider>
	)
}
