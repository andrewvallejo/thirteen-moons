import { nanoid } from 'nanoid'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import moonFace from '../assets/moon-face.png'

export const MoonMsgBar = () => {
  const id = nanoid(10)

  return (
    <Switch>
      <>
        <article className="message-bar" key={id}>
          <img
            alt="the face of the moon"
            src={moonFace}
            className="moon-face"
          />
          <blockquote className="dialog-container">
            <Route path="/wrong-turn">
              <h1 className="dialog">Where do you think you are?</h1>
            </Route>
            <Route exact path="/lunares/">
              <h1 className="dialog">Choose your fate, child</h1>
            </Route>
            <Route exact path="/lunares/1">
              <h1 className="dialog">
                Excellent child, you've found my first moon
              </h1>
            </Route>
            <Route exact path="/lunares/2">
              <h1 className="dialog">Good, keep on going.</h1>
            </Route>
            <Route exact path="/lunares/3">
              <h1 className="dialog">
                You have three. Remember nothing is for free
              </h1>
            </Route>
            <Route exact path="/lunares/4">
              <h1 className="dialog">I can tell you're amazing from up here</h1>
            </Route>
            <Route exact path="/lunares/5">
              <h1 className="dialog">Amazing, keep on going.</h1>
            </Route>
            <Route exact path="/lunares/6">
              <h1 className="dialog">You're almost half way there</h1>
            </Route>
            <Route exact path="/lunares/7">
              <h1 className="dialog">
                And now you're closer to the end than you are to the start
              </h1>
            </Route>
            <Route exact path="/lunares/8">
              <h1 className="dialog">I count 8 moons, child</h1>
            </Route>
            <Route exact path="/lunares/9">
              <h1 className="dialog">I can see the night getting bright</h1>
            </Route>
            <Route exact path="/lunares/10">
              <h1 className="dialog">Excellent work, child</h1>
            </Route>
            <Route exact path="/lunares/11">
              <h1 className="dialog">
                See how far curiousity and faith has brought you?
              </h1>
            </Route>
            <Route exact path="/lunares/12">
              <h1 className="dialog">You don't fear anything, do you?</h1>
            </Route>
            <Route exact path="/lunares/13">
              <h1 className="dialog">You've completed a full circuit child</h1>
            </Route>
            <Route exact path="/">
              <h1 className="dialog">
                Do you wish to craft a Moon challenge card?
              </h1>
            </Route>
            <Route exact path="/collection">
              <h1 className="dialog">Your collection</h1>
            </Route>
          </blockquote>
        </article>
      </>
    </Switch>
  )
}
