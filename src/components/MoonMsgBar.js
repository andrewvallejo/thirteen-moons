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
                  <h1 className= 'dialog'>Where do you think you are?</h1>
                </Route>
                
                <Route exact path='/lunares/'>
                  <h1 className='dialog'>Choose your fate, child</h1>
                </Route>
                <Route exact path='/lunares/1'>
                  <h1 className='dialog'>Excellent child, you've found my first moon</h1>
                </Route>
                <Route exact path='/lunares/2'>
                  <h1 className='dialog'>Good, keep on going.</h1>
                </Route>
                <Route exact path='/'>
                  <h1 className='dialog'>Do you wish to craft a Moon challenge card?</h1>
                </Route>
            </blockquote>
        </article>
      </>
    </Switch>
  )
}
