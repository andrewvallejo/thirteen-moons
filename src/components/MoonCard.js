import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types' 
import { nanoid } from 'nanoid'
import { createCover } from '../utility/util'


export const MoonCard = ({ cards, draw }) => {
   const [level, setLevel] = useState(1)
   const match = useRouteMatch().url;
   return cards.map((card) => {
      const id = nanoid(10)
      const { code, talent, terms, count, intervals } = card
      const endTurn = () => {
         setLevel(level + 1) 
         draw()
      }

      

      return (
         <article className='moon-card' key={id}>
            <Link to={match.includes('lunares') && `${match}/${level}` } onClick={()=> {
              if(match.includes('lunares')) endTurn() 
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

MoonCard.propTypes = {
   card: PropTypes.shape({
      code: PropTypes.string,
      talent: PropTypes.string,
      terms: PropTypes.string,
      count: PropTypes.number,
      intervals: PropTypes.string,
   }),
   draw: PropTypes.func
 }