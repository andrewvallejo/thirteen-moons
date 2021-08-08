import React from "react"
import { MoonCard } from './MoonCard'
import { MoonLevel } from "./MoonLevel"
import { MoonMsgBar } from './MoonMsgBar'

export const Spread = ({deck, hand, draw}) => {
    return (
        <section className="card-spread">
              <MoonMsgBar />
              <MoonLevel levels={deck}/>
              <MoonCard deck={hand}/>
            </section>
  )
}