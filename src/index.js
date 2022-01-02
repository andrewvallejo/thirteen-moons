import './styles/styles.scss'

import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CollectionPage } from './pages/CollectionsPage'
import { CreationPage } from './pages/CreationPage'
import { GamePage } from './pages/GamePage'
import { HomePage } from './pages/HomePage'
import { GameContext } from './store/GameContext'
import { reducer } from './store/reducer'

const initialState = {
	gameStarted: false,
	creationCard: [],
	deck: [],
	hand: [],
	quote: '',
	level: 0
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<Router>
			<React.StrictMode>
				<GameContext.Provider value={{ state, dispatch }}>
					<Routes>
						<Route path='/lunares/' element={<GamePage />}>
							<Route path=':level' element={<GamePage />} />
						</Route>
						<Route path='/creation/' element={<CreationPage />} />
						<Route exact path='/' element={<HomePage />} />
						<Route exact path='/collection/' element={<CollectionPage />} />
					</Routes>
				</GameContext.Provider>{' '}
			</React.StrictMode>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
