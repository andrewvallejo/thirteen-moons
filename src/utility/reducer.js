export const reducer = (state, { action }) => {
	console.log('action', action)
	const { type, value } = action
	switch (type) {
		case 'ADD_DECK':
			return { ...state, deck: value }
		case 'UPDATE_DECK':
			return { ...state, deck: value }
		case 'UPDATE_HAND':
			return { ...state, hand: value }
		case 'CREATE_CARD':
			return { ...state, creationCard: value }

		default:
			return state
	}
}
