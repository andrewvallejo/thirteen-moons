import React from "react"
import PropTypes from 'prop-types';
import { MoonCard } from './MoonCard'
import { MoonMsgBar } from './MoonMsgBar'
import { Link } from "react-router-dom";

export const Collection = ({ deck }) => {
  return (
      <section className="card-collection">
        <MoonMsgBar />
        <div className="card-containers">
        <MoonCard cards={deck} />
        </div>
        <Link className="back-button" to="/">Go Back</Link>

      </section>
  )
}

Collection.propTypes = {
  deck: PropTypes.array,
  hand: PropTypes.array,
  draw: PropTypes.func
}