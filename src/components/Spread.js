import React from "react"
import { MoonCard } from './MoonCard'


export const Spread = ({deck, hand, draw}) => {
  



  return (
    <section className="card-spread">
      <MoonCard deck={hand}/>
    </section>
  )
}