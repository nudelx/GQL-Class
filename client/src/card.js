import React from 'react'
import { getBookIcon } from './utils'

export default ({ name, genre, author, index, id }) => {
  return (
    <div className="card small inline ">
      <div className="card-header">{name} </div>
      <div className="bookCard">
        <span role="img" aria-label="img">
          {getBookIcon()}
        </span>
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-subtitle" style={{ fontSize: '30px' }}>
          <span role="img" aria-label="img">
            👨🏻‍💻
          </span>
          {`by: ${author.name}`}
        </h5>
        <p className="card-text">{`Book ID: ${id.slice(0, 9)}`}</p>

        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sollicitudin, sapien sed consequat tempus, ipsum nibh condimentum
          nibh, non accumsan lorem odio eu justo.{' '}
        </p>
        <button>Let me go here!</button>
      </div>
    </div>
  )
}
