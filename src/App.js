import React, { useReducer } from 'react'
import { Route } from 'react-router-dom'

import { CollectionPage } from './pages/CollectionsPage'
import { CreationPage } from './pages/CreationPage'
import { GamePage } from './pages/GamePage'
import { HomePage } from './pages/HomePage'
import { GameContext } from './utility/GameContext'
import { reducer } from './utility/reducer'

const initialState = {
	deck: [],
	hand: [],
	creationCard: [],
	gameStarted: false
}

export const App = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState)

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			<Route path='/lunares/' component={GamePage} />
			<Route path='/creation/' component={CreationPage} />
			<Route exact path='/' component={HomePage} />
			<Route exact path='/collection/' component={CollectionPage} />
		</GameContext.Provider>
	)
}
