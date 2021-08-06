import React from 'react'
import { nanoid } from 'nanoid'

export const MoonCard = ({ deck }) => {
   return deck.map((card) => {
      const id = nanoid(10)
      const { code, image, suit, value } = card
      return (
        <article className="moon-card" key={id}>
         <img alt="card" src={image} id={code} key={id} value={value} className={suit}  />
        </article>
       )
   })
}