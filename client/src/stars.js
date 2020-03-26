import React, { useEffect } from 'react'

export default ({ onChange }) => {
  const [selected, setSelected] = React.useState(0)
  const makeSelection = e => {
    const selected = e.target
    const children = [...e.currentTarget.children]
    const index = children.indexOf(selected)
    children.forEach((e, i) => {
      i <= index ? e.classList.add('selected') : e.classList.remove('selected')
    })

    setSelected(index + 1)
  }
  useEffect(() => {
    typeof onChange === 'function' && onChange(selected)
  }, [onChange, selected])
  return (
    <div className="starsHolder" onClick={makeSelection}>
      <div className="inputStar "></div>
      <div className="inputStar "></div>
      <div className="inputStar "></div>
      <div className="inputStar"></div>
      <div className="inputStar"></div>
    </div>
  )
}
