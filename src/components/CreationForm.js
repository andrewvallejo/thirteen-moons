import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from '../utility/GameContext'

const initialState = {
	code: '',
	talent: '',
	terms: '',
	count: 0,
	intervals: ''
}

export const CreationForm = () => {
	const { dispatch, state } = useContext(GameContext)

	const handleChange = (event) => {
		const { value, id } = event.target
		initialState[id] = value

		dispatch({ state, action: { type: 'CREATE_CARD', value: initialState } })
	}

	return (
		<form className='creation-form'>
			<label htmlFor='talent'>Choose a talent</label>
			<select className='talents choice' id='talent' value={state.talent} onChange={handleChange}>
				<option hidden> Talents </option>
				<option name='mind'>Mind</option>
				<option name='spirit'>Spirit</option>
				<option name='wisdom'>Wisdom</option>
				<option name='vitality'>Vitality</option>
			</select>

			<label htmlFor='count'>Choose a number between 1 and 13.</label>
			<input
				className='count choice'
				id='count'
				type='range'
				name='count'
				min='1'
				max='13'
				value={state.count}
				onChange={handleChange}
			/>

			<label htmlFor='terms'>Write your terms.</label>
			<input
				className='terms choice'
				id='terms'
				type='text'
				name='terms'
				placeholder='Enter your challenge here'
				value={state.terms}
				onChange={handleChange}
			/>

			<label htmlFor='intervals'>Choose an interval.</label>
			<select className='intervals choice' id='intervals' value={state.intervals} onChange={handleChange}>
				<option hidden> Intervals </option>
				<option name='minutes'>minutes</option>
				<option name='repetition'>repetitions</option>
				<option name='counts'>counts</option>
				<option name='pages'>pages</option>
				<option name='chapter'>chapters</option>
				<option name='articles'>articles</option>
				<option name='miles'>miles</option>
				<option name='reps-of-ten'>reps of 10</option>
				<option name='ounces'>ounces</option>
			</select>
			<button className='create-button' type='submit' onClick={handleChange}>
				Create a moon card
			</button>
			<Link className='start-button' to='/lunares'>
				I'm content
			</Link>
			<Link className='view-collection-button' to='/collection'>
				See your collection
			</Link>
		</form>
	)
}
