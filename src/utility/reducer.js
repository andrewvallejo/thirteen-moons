export const reducer = (state, { action }) => {
  const { type, value } = action
  switch (type) {
    case 'ADD_DECK':
      return { ...state, deck: value }
    case 'UPDATE_DECK':
      return { ...state, deck: action.deck }
    case 'UPDATE_HAND':
      return { ...state, hand: action.deck }
    case 'ADD_ERROR':
      return { ...state, hand: action.status }
    default:
      return state
  }
}
