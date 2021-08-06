import React from "react"
import { MoonCard } from './MoonCard'
// import { spread as draw } from "../utility/util"

export const Spread = ({deck, hand, draw}) => {
  



  return (
    <section>
    <button onClick={()=>draw(deck)}>SPREAD</button>
    <MoonCard deck={hand}/>
    </section>
  )
}