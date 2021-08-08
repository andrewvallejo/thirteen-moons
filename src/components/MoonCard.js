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
            <Link exact to={`${match}/${level}`} >
     
               <div className="inner-card">
               <div className="card-front"> 

                     </div>

                        <img className="card-back"    
                        id={code} 
                        key={id}
                        value={value} 
                        talent={suit}
                        onClick={()=> setLevel(level + 1)}
                        alt="card" 
                        src={createCover()} 
                        />
                     <aside className='darken'/> 
                     <aside className='overlay'/> 

              
              
                        </div>
            </Link>
         </article>
       )
   })
}