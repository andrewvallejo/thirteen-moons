import { useContext } from "react"
import { Spread } from "../components/Spread"
import { GameContext } from "../utility/GameContext"
import { drawHand } from "../utility/util"


export const GamePage = () => {
  const { state, dispatch } = useContext(GameContext)

  return (
    <>
        {<Spread deck={state.deck} hand={state.hand}/> }
    </>
  )
}
