import React from "react";
import moonFace from '../assets/moon-face.png'
import { Route , Switch } from 'react-router-dom';

export const MoonMsgBar = () => {
  return (
    <Switch>
        <article className="message-bar">
          <img alt="the face of the moon" src={moonFace} className='moon-face' />
          <blockquote className="dialog-container">
          <Route  path='/wrong-turn'>
            <p className= 'dialog'>Where do you think you are?</p>
          </Route>
          <Route exact path="/lunares/quarum/:level">
            <p className='dialog'>Choose your fate, child</p>
          </Route>
          <Route exact path="/">
            <p className='dialog'>Craft a card?</p>
          </Route>
        </blockquote>
      </article>
    </Switch>
  )
}
