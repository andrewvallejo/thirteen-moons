import { useContext } from "react"
import { Collection } from "../components/Collection"
import { GameContext } from "../utility/GameContext"

export const CollectionPage = () => {
  const { state, dispatch } = useContext(GameContext)
  

  return (
    <>
                  <Collection />
    </>
  )
}
