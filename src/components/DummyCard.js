import { nanoid } from 'nanoid'
import React from 'react'

import { dummyCover } from '../utility/cardCovers'

export const DummyCard = ({ card }) => {
  const { code, talent, terms, count, intervals } = card
  const id = nanoid(10)

  return (
    <article className="dummy-card" key={id}>
      <div className="inner-card">
        <img
          className="card-back"
          id={code}
          key={id}
          alt="card"
          src={dummyCover}
        />
        <aside className="darken" />
        <aside className="overlay" />
        <div className="card-front">
          <aside className="card-content">
            <h2 className="talent">{talent}</h2>
            <h3 className="terms">
              {terms}
              <span className="count">{count}</span>
              {intervals}
            </h3>
            <h3 className="talent mirrored">{talent}</h3>
          </aside>
        </div>
      </div>
    </article>
  )
}