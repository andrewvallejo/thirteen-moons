import React from 'react';
import moonFace from '../assets/moon-face.png'
import { Route , Switch } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const MoonMsgBar = () => {
  const id = nanoid(10)

  return (
    <Switch> 
      <>
        <article className='message-bar' key={id}>
            <img alt='the face of the moon' src={moonFace} className='moon-face' />
              <blockquote className='dialog-container'>
                <Route  path='/wrong-turn'>
                  <p className= 'dialog'>Where do you think you are?</p>
                </Route>
                <Route exact path='/lunares/quarum/'>
                  <p className='dialog'>Choose your fate, child</p>
                </Route>
                <Route exact path='/lunares/quarum/1'>
                  <p className='dialog'>Excellent child, you've found my first moon</p>
                </Route>
                <Route exact path='/lunares/quarum/2'>
                  <p className='dialog'>Good, keep on going.</p>
                </Route>
                <Route exact path='/'>
                  <p className='dialog'>Do you wish to craft a Moon challenge card?</p>
                </Route>
            </blockquote>
        </article>
      </>
    </Switch>
  )
}
