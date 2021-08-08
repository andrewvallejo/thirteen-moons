import React from "react"
import { useRouteMatch, Route } from 'react-router-dom';
import { MoonCard } from './MoonCard'
import { MoonLevel } from "./MoonLevel"
import { MoonMsgBar } from './MoonMsgBar'

export const Spread = ({deck, hand, draw}) => {
  const match = useRouteMatch().url;

    return (
      <Route exact path={`${match}/quarum/:level`}>
        <section className="card-spread">
              <MoonMsgBar />
              <MoonLevel levels={deck}/>
              <MoonCard deck={hand}/>
            </section>
        </Route>
  )
}