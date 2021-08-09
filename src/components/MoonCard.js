import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { createCover } from '../utility/util'

export const MoonCard = ({ cards }) => {
   const [level, setLevel] = useState(1)
   const match = useRouteMatch().url;
   return cards.map((card) => {
      const id = nanoid(10)
      const { code, talent, terms, count, intervals } = card
      return (
         <article className='moon-card' key={id}>
            <Link onClick={()=> setLevel(level + 1)} to={`${match}/${level}`} >
               <div className="inner-card">
                  <div className="card-front"> 
                     <aside className="card-content">
                        <h2 className='talent'>{talent}</h2>
                        <h3 className='terms'>
                           {terms}
                              <span className="count">{count}</span>
                           {intervals}
                        </h3>
                        <h3 className='talent mirrored'>{talent}</h3>
                     </aside>
                  </div>
                     <img className="card-back"    
                        id={code} 
                        key={id}
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