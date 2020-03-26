import React from 'react'
import Card from './card'

export default ({ books }) => {
  return (
    <div className="paper body">
      {books.map((b, index) => (
        <Card index={index + 1} key={b.id} {...b} />
      ))}
    </div>
  )
}
