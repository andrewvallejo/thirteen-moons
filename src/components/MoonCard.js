import React from 'react'
import { nanoid } from 'nanoid'
import { createCover } from '../utility/util'

export const MoonCard = ({ deck }) => {
   return deck.map((card) => {

      const id = nanoid(10)
      const { code, suit, value } = card
      return (
        <article className="moon-card" key={id}>
         <img alt="card" src={createCover()} id={code} key={id} value={value} className={suit}  />
        </article>
       )
   })
}