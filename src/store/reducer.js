export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_DECK':
			return { ...state, deck: action.deck }
		case 'SET_HAND':
			return { ...state, hand: action.hand }
		case 'SET_CREATION_CARD':
			return { ...state, creationCard: action.creationCard }
		case 'SET_GAME':
			return { ...state, gameStarted: action.gameStarted }
		case 'SET_LEVEL':
			return { ...state, level: action.level }
		default:
			return state
	}
}
