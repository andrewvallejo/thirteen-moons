import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { createCover } from '../utility/util'

export const MoonCard = ({ deck }) => {
   const [level, setLevel] = useState(1)
   const match = useRouteMatch().url;

   return deck.map((card) => {
      const id = nanoid(10)
      const { code, suit, value } = card

      return (
         <article className='moon-card' key={id}>
            <Link to={`${match}/quarum/${level}`} >
               <div 
                  className="card-back"    
                  onClick={()=> setLevel(level + 1)}> 
                     <img className="card-image" 
                     alt="card" src={createCover()} 
                     id={code} key={id}
                     value={value} 
                     talent={suit} />
                  <aside className='darken'/> 
                  <aside className='overlay'/> 
               </div>
            </Link>
         </article>
       )
   })
}