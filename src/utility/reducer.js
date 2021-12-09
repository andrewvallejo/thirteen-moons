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

export const formReducer = (state, {action}) => {
  const {type, value} = action
  switch (type) {
    case 'UPDATE_TALENT':     
      return { ...state, talent: value }
    case 'UPDATE_TERMS':     
      break;
    case 'UPDATE_COUNT':     
      break;
    case 'UPDATE_INTERVALS':     
      break;
    default:
      return state;
  }
} 