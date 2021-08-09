import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { createCover } from '../utility/util'

export const MoonCard = ({ cards, draw }) => {
   const [level, setLevel] = useState(1)
   const match = useRouteMatch().url;
   return cards.map((card) => {
      const id = nanoid(10)
      const { code, talent, terms, count, intervals } = card

      return (
         <article className='moon-card' key={id}>
            <Link to={`${match}/${level}`} onClick={()=> {
               setLevel(level + 1) 
               draw()
               } }>
               <div className="inner-card">
                  <div className="card-front"> 
                     <aside className="card-content">
                        <h2 className='talent'>{talent}</h2>
                        <h3 className='terms'> {terms}</h3>
                              <h3 className="count">{count}</h3>
                           <h4 className="intervals">{intervals}</h4>
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