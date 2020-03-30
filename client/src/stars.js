import React from 'react'

export default ({ onChange, value }) => {
  const makeSelection = e => {
    const selected = e.target
    const children = [...e.currentTarget.children]
    const index = children.indexOf(selected)
    onChange(index + 1)
  }
  return (
    <div className="starsHolder" onClick={makeSelection}>
      {[1, 2, 3, 4, 5].map((v, i) => {
        return (
          <div
            key={v}
            className={`inputStar ${i < value ? 'selected' : ''}`}
          ></div>
        )
      })}
    </div>
  )
}
