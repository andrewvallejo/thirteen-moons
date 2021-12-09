import { useContext } from "react"
import { Creation } from "../components/Creation"
import { GameContext } from "../utility/GameContext"


export const CreationPage = () => {
  const { state, dispatch } = useContext(GameContext)
  
  return (
    <>
      <Creation context={[state, dispatch]}/>
    </>
  )
}
