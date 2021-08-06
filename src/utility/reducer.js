export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_DECK':
      return {...state, deck: action.deck}
    default:
      return state
  }
}
 
