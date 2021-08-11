import React from "react"
import PropTypes from 'prop-types';
import { MoonCard } from './MoonCard'
import { MoonMsgBar } from './MoonMsgBar'

export const Collection = ({ deck }) => {
  return (
      <section className="card-collection">
        <MoonMsgBar />
        <div className="card-containers">
        <MoonCard cards={deck} />
        </div>
      </section>
  )
}

Collection.propTypes = {
  deck: PropTypes.array,
  hand: PropTypes.array,
  draw: PropTypes.func
}