import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

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
	gameStarted: false,
	level: 1
}

export const App = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState)

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			<Routes>
				<Route path='/lunares/' element={<GamePage />}>
					<Route path=':level' element={<GamePage />} />
				</Route>
				<Route path='/creation/' element={<CreationPage />} />
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/collection/' element={<CollectionPage />} />
			</Routes>
		</GameContext.Provider>
	)
}
