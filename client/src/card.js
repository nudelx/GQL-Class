import React from 'react'
import { getBookIcon } from './utils'

export default ({ name, genre, author, index, id }) => {
  return (
    <div className="card small inline ">
      <div className="card-header">{`#${index} ${id}`}</div>
      <div className="bookCard">
        <span role="img" aria-label="img">
          {getBookIcon()}
        </span>
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-subtitle">{`by: ${author.name}`}</h5>
        <p className="card-text">
          Notice that the card width in this example have been set to 20rem,
          otherwise it will try to fill the current container/row where the card
          is.
        </p>
        <button>Let me go here!</button>
      </div>
    </div>
  )
}
