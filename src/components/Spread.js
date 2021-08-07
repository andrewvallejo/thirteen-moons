import React from "react"
import { MoonCard } from './MoonCard'
import { MoonLevel } from "./MoonLevel"

export const Spread = ({deck, hand, draw}) => {
    return (
    <section className="card-spread">
      <MoonLevel levels={deck}/>
        <MoonCard deck={hand}/>
      </section>
  )
}