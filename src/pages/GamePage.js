import { useContext } from "react"
import { Spread } from "../components/Spread"
import { GameContext } from "../utility/GameContext"


export const GamePage = () => {
  const { state, dispatch } = useContext(GameContext)


  return (
    <>
                  <Spread />

    </>
  )
}
