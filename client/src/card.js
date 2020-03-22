import React from 'react'
import { getBookIcon } from './utils'

export default ({ book }) => {
  return (
    <div className="card small inline ">
      <div className="card-header">Header</div>
      <div className="bookCard">
        <span role="img" aria-label="img">
          {getBookIcon()}
        </span>
      </div>
      <div className="card-body">
        <h4 className="card-title">My awesome Paper card!</h4>
        <h5 className="card-subtitle">Nice looking subtitle.</h5>
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
