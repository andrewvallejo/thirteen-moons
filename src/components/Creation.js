import React, { useState } from "react"
import { Link } from "react-router-dom"
import { DummyCard } from "./DummyCard"
import { MoonMsgBar } from "./MoonMsgBar"
import { Talents } from './Talents'
import { swapCard } from "../utility/util"


export const Creation = ({update}) =>  {
  const [talent, setTalent] = useState('')
  const [terms, setTerms] = useState('')
  const [count, setCount] = useState('∞')
  const [intervals, setIntervals] = useState('')

  const uniqueCard = {
    code: '',
    talent: talent ,
    terms: terms ,
    count: count,
    intervals: intervals
  }

  const onHandle = (event) => {
    event.preventDefault()
      validateForm()
  }

  const validateForm = () => {
   return ( 
    !talent ? setTalent('choose talent'): 
    !terms || terms === 'Your terms are the activity you want to do' ? setTerms('Your terms are the activity you want to do') : 
    !count || count === ('∞') ? setCount('∞'):
    !intervals || terms === 'Choose interval'? setIntervals('Choose interval') :
    terms && count && intervals ? submitCard() :
    setTalent('Try again')
    )
  }

  const submitCard = () => {
    updateCardValues()
    swapCard(uniqueCard)
    resetForm()
    setTalent('You did it!')
    setTerms('You made a moon card!')
    setTimeout(() => {
      setTalent('')
      setTerms('')
  }, 1500)
  }

  const updateCardValues = () => {
    uniqueCard.talent = talent
    uniqueCard.terms = terms
    uniqueCard.count= count
    uniqueCard.intervals= intervals
    uniqueCard.code = talent[0].toLowerCase() + count
  }

  const resetForm = () => {
    setTalent('')
    setTerms('')
    setCount('')
    setIntervals('')
  }

  return (
    <section className="creation-view">
      <DummyCard card={uniqueCard} />   
      <MoonMsgBar  />
      <form className="creation-form">
        <label htmlFor="talent">Choose a talent</label> 
        <select 
          className='talents choice'
          id='talents'
          name='talents'
          value={talent} 
          onChange={(event) => {
          event.preventDefault()
          setTalent(event.target.value)}} >
          <option hidden> Talents </option>
          <option name="mind">Mind</option>
          <option name="spirit">Spirit</option>
          <option name="wisdom">Wisdom</option>
          <option name="vitality">Vitality</option>
        </select>
        <label htmlFor='count'>Choose a number between 1 and 13.</label> 
        <input 
          className='count choice'   
          id='count'
          type="range" 
          name="count"
          min="1" max="13"
          value={count}
          onChange={(event) => {
          event.preventDefault()
          setCount(event.target.value)}} />
        <label htmlFor='terms'>Write your terms.</label> 
        <input 
          className='terms choice'
          id='terms'
          type="text"
          name="terms"
          placeholder="Enter your challenge here"
          value={terms}
          onChange={(event) => {
          event.preventDefault()
          setTerms(event.target.value)}} />
        <label htmlFor='intervals'>Choose an interval.</label> 
        <select 
          className='intervals choice'
          id='intervals'
          value={intervals} 
          onChange={(event) => {
          event.preventDefault()
          setIntervals(event.target.value)}} >
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
      <button className="create-button" type="submit" onClick={(event) => onHandle(event)}>Create a moon card.</button>
      <Link className="start-button" to="/lunares" onClick={() => update()}>I'm content</Link>
      </form>
      <Talents />
    </section>


  )
}