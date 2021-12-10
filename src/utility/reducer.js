export const reducer = (state, { action }) => {
  const { type, value } = action
  switch (type) {
    case 'ADD_DECK':
      return { ...state, deck: value }
    case 'UPDATE_DECK':
      return { ...state, deck: value }
    case 'UPDATE_HAND':
      return { ...state, hand: value }
    default:
      return state
  }
}

export const formReducer = (state, { action }) => {
  const { type, value, id } = action
  switch (type) {
    case 'UPDATE_CARD':
      return { ...state, [id]: value }

    default:
      return state
  }
}
