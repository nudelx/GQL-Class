import React from 'react'

export default ({ error }) => {
  return (
    <div className="paper ">
      <p className="card center red">Error:( {error.message}</p>
    </div>
  )
}
