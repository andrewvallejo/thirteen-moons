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
                     <aside className="card-content">
                           <h2 className='talent'>{suit}</h2>
                           <h3 className='terms'>
                           Stretch towards the heavens for 
                           <span className="terms-value">{value}</span>
                            minutes</h3>
                           <h3 className='talent mirrored'>{suit}</h3>

                     </aside>
                  </div>
                     <img className="card-back"    
                        id={code} 
                        key={id}
                        onClick={()=> setLevel(level + 1)}
                        alt="card" 
                        src={createCover()} />
                     <aside className='darken'/> 
                     <aside className='overlay'/>  
               </div>
            </Link>
         </article>
       )
   })
}