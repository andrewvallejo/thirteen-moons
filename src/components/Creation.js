import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { formReducer } from '../utility/reducer'

import { DummyCard } from './DummyCard'
import { MoonMsgBar } from './MoonMsgBar'
import { Talents } from './Talents'

const initialState = {
  code: '',
  talent: '',
  terms: '',
  count: 0,
  intervals: ''
}

export const Creation = (context) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleChange = (event) => {
    const { value } = event.target
    dispatch({ state, action: { type: 'UPDATE_TALENT', value: value } })
  }

  return (
    <section className="creation-view">
      {/* <DummyCard card={card} /> */}
      <MoonMsgBar />
      <form className="creation-form">
        <label htmlFor="talent">Choose a talent</label>
        <select
          className="talents choice"
          id="talent"
          value={state.talent || 'talent'}
          onChange={handleChange}>
          <option hidden> Talents </option>
          <option name="mind">Mind</option>
          <option name="spirit">Spirit</option>
          <option name="wisdom">Wisdom</option>
          <option name="vitality">Vitality</option>
        </select>

        {/* <label htmlFor="count">Choose a number between 1 and 13.</label>
        <input
          className="count choice"
          id="count"
          type="range"
          name="count"
          min="1"
          max="13"
          value={count}
          onChange={(event) => {
            event.preventDefault()
            setCard(count, event.target.value)
          }}
        />
        <label htmlFor="terms">Write your terms.</label>
        <input
          className="terms choice"
          id="terms"
          type="text"
          name="terms"
          placeholder="Enter your challenge here"
          value={terms}
          onChange={(event) => {
            event.preventDefault()
            setCard(terms, event.target.value)
          }}
        />
        <label htmlFor="intervals">Choose an interval.</label>
        <select
          className="intervals choice"
          id="intervals"
          value={intervals}
          onChange={(event) => {
            event.preventDefault()
            setCard(...intervals, event.target.value)
          }}>
          <option hidden> Intervals </option>
          <option name="minutes">minutes</option>
          <option name="repetition">repetitions</option>
          <option name="counts">counts</option>
          <option name="pages">pages</option>
          <option name="chapter">chapters</option>
          <option name="articles">articles</option>
          <option name="miles">miles</option>
          <option name="reps-of-ten">reps of 10</option>
          <option name="ounces">ounces</option>
        </select>
        <button className="create-button" type="submit" onClick={handleChange}>
          Create a moon card
        </button>
        <Link className="start-button" to="/lunares">
          I'm content
        </Link>
        <Link className="view-collection-button" to="/collection">
          See your collection
        </Link> */}
      </form>
      <Talents />
    </section>
  )
}
