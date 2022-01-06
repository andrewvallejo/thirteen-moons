import { useState } from "react"

export const Rules = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <article className="rulebook">
        <h2>Talents</h2>
        <div className="talent">
          <button name='mind' onClick={handleClick}>Mind</button>
          <p className={active ? '' : 'hidden'}>
            {' '}
            Any activity that challenges your brain. Repetition over intellect.
            Have faith.
          </p>
          </div>
    </article>
  )
}
