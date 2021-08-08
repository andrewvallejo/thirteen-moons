import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { createCover } from '../utility/util'

export const MoonCard = ({ cards }) => {
   const [level, setLevel] = useState(1)
   const match = useRouteMatch().url;
   return cards.map((card) => {
      const id = nanoid(10)
      const { abrv, talent, terms, count, interval } = card

      return (
         <article className='moon-card' key={id}>
            <Link exact to={`${match}/${level}`} >
               <div className="inner-card">
                  <div className="card-front"> 
                     <aside className="card-content">
                        <h2 className='talent'>{talent}</h2>
                        <h3 className='terms'>
                           {terms}
                              <span className="count">{count}</span>
                           {interval}
                        </h3>
                        <h3 className='talent mirrored'>{talent}</h3>
                     </aside>
                  </div>
                     <img className="card-back"    
                        id={abrv} 
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