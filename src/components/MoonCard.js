import React from 'react'
import { nanoid } from 'nanoid'
import { createCover } from '../utility/util'

export const MoonCard = ({ deck }) => {
   return deck.map((card) => {

      const id = nanoid(10)
      const { code, suit, value } = card
      return (
         <article className='moon-card' key={id}>
            <div className="blending-modes"> 
               <img className="card-image" alt="card" src={createCover()} id={code} key={id} value={value} talent={suit} />
               <aside className='darken'/> <aside className='overlay'/> <aside className='hue'/> 
            </div>
         </article>
       )
   })
}